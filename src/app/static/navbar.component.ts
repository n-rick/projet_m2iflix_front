import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tokm2iflix = localStorage.getItem('tokm2iflix');
  userN = localStorage.getItem('userN');
  userP = localStorage.getItem('userP');

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  deconnexion() {
    localStorage.removeItem('tokm2iflix');
    localStorage.removeItem('userN');
    localStorage.removeItem('userP');
    this.router.navigateByUrl('connexion');
  }

}
