import { Component } from '@angular/core';
import { Photo } from './interface/photo.interface';
import { PhotosService } from './service/photos.service';
import {Observable, observable, Subscription} from'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio';

sub! : Subscription;
photos! : Photo[]

numeroLike:number = 0
constructor(private photoSrv:PhotosService){

}

ngOnInit():void{
console.log(this.photoSrv.get())
this.recuperaFoto()
this.photoRefresh.subscribe()
}

photoRefresh = new Observable((Server)=>
{
  setInterval(()=>{
    Server.next(this.photos = this.photoSrv.photos)
  }
,1000)
})


recuperaFoto(){
  this.sub = this.photoSrv.get().subscribe((ris)=>{
    console.log(ris)
    this.photos = ris
  })
}
deleteFoto(id:number){
this.photoSrv.deletePhoto(id)
}
likeFoto(id:number){
this.photoSrv.setLike(id)

  this.numeroLike++
}

unLike(id:number){
  this.photoSrv.setLike(id)

  this.numeroLike--
}
ngOnDestroy():void{
this.sub.unsubscribe()
}

// recuperaFoto(){

//   console.log('ciao')
//  this.sub = this.photoSrv.get()
//  .subscribe((ris)=>{
//   console.log(ris);
//      this.photos?.push(ris)
//  })
// }
// eliminaFoto(){

// }


}
