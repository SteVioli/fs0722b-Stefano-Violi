import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({ //injection significa che quando un framework da questa funzionalità , in automatico angular ci da il service. e in questo caso post.service.ts è modificabile, accessibile da qualunque componente.
  providedIn: 'root'
})
export class PostService {

  getPostsFiltrati(a:boolean) {
    let p = fetch("assets/db.json") //metto il fetch all interno di una variabile
    console.log(p)

    let j = p.then((response)=>{ //col then posso manipolare la mia promise, richiede sempre una funzione ()=>
      return response.json() //metodo json() ottengo l'array
    })

    let filteredPromise = j.then((posts:Post[])=>{
      return posts.filter(p=>p.active==a)
    })

    return filteredPromise

  }

  async getPostsFiltered(a:boolean) {
    let response = await fetch("assets/db.json")
    let posts:Post[] = await response.json()
    let arr = posts.filter(p=>p.active==a)
    return arr
  }//altra alternativa



  // fetchData() {
  //   return fetch().then(res=>res.json()).then()
  // }
}
