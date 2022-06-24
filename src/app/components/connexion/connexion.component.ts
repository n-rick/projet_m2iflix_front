import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User = {};
  error: string | null = null;

  constructor(
    private as: AuthService,
    private us: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  connexion() {
    this.as.login(this.user).subscribe({
      next: res => {
        if (res.token != null) {
          localStorage.setItem('tokm2iflix', res.token);
          this.us.getOneUser(this.user.email).subscribe(res => {
            this.user = res[0];
            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('userN', JSON.stringify(this.user.nom));
            localStorage.setItem('userP', JSON.stringify(this.user.prenom));
            this.router.navigateByUrl('/films');
          })

        }
      },
      error: res => {
        this.error = "erreur au niveau de l' authentification! Veuillez recommencez";
      }
    });
  }
}
