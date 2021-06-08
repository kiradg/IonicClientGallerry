import { Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { environment } from '../../../../../environments/environment'
const { Camera, } = Plugins;

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss']
})
export class MultiFileUploadComponent {

  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() productid: number;
  @Output() responseEvent = new EventEmitter<string>();
  uploader: FileUploader;

  constructor() { }

  ngOnInit() {
    this.uploader = new FileUploader({
      url: `${environment.api_url}/products/${this.productid}/gallery`,
      itemAlias: "image",
      removeAfterUpload: false,
      autoUpload: true
    });
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  public async addImageCamera() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    let blobImage = this.dataURItoFile(image.base64String, image.format);
    this.uploader.addToQueue([blobImage]);
  }

  public addFiles() {
    this.fileInput.nativeElement.click();
  }

  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    let data = JSON.parse(response);
    this.responseEvent.emit(data)
    setTimeout(() => { item.remove(); }, 1000);

  }

  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  }

  dataURItoFile(dataURI, format) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array]);
    const file = new File([blob], `capture.${format}`, { type: `image/${format}` })
    return file;
  }
}