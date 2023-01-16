import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interface/photo.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  photos!: Photo[]

  get() {
    return this.http
      .get<{ data: Photo[] }>('https://reqres.in/api/users')
      .pipe(map((ris) =>{
        this.photos = ris.data;
      return  ris.data;
      } ));

  }
  setLike(id: number): void {
    this.photos?.find((foto) => {
      if (foto.id === id) {
        foto.like = !foto.like;
      }
    });
  }
  deletePhoto(id:number){
this.photos = this.photos.filter( photo => photo.id != id)
  }
}
