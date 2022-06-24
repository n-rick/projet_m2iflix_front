import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user: User = {};

  constructor(private us: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  singIn(){
    localStorage.setItem('userMail', this.user.email?? "");
    this.us.addNewUser(this.user).subscribe(res => {
      this.route.navigateByUrl('/connexion')
    })
  }
}
