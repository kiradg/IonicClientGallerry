import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { Camera,  } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(
    private platform: Platform,
  ) { }

  public async addImageFile() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
    const imagejson= { image: `data:image/jpeg;base64,${image.base64String}`}; 
    return imagejson;
  }
  public async addImageCamera() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    const imagejson= { image: `data:image/jpeg;base64,${image.base64String}`};
    return imagejson;
  }

}