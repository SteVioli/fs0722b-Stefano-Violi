import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'child';

  users = [
    {
      nome: "Mario",
      cognome: "Rossi"
    },
    {
      nome: "Luca",
      cognome: "Blu"
    },
    {
      nome: "Marco",
      cognome: "Verdi"
    },
    {
      nome: "Giorgio",
      cognome: "Marroni"
    },
    {
      nome: "Valerio",
      cognome: "Azzurri"
    }

  ]
}
