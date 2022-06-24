import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

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
    private router: Router) { }

  ngOnInit(): void {
  }

  connexion() {
    this.as.login(this.user).subscribe({
      next: res => {
        localStorage.setItem('usEmail', this.user.email?? "");
        if (res.token != null) {
          localStorage.setItem('tokm2iflix', res.token);
          this.router.navigateByUrl('/films');
        }
      },
      error: res => {
        this.error = "erreur au niveau de l' authentification! Veuillez recommencez";
      }
    });
  }
}
