import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'm2iflix';

  constructor(private router: Router) { }

  //   deconnexion() {
  //     localStorage.removeItem('tokm2iflix');
  //     this.router.navigateByUrl('/auth');
  //   }
}
