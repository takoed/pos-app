import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent {

  storageKey = 'pos-username'
  username: string = 'admin';
  password: string = '12345678';
  error = false;
  usernameAdmin;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usernameAdmin = this.authService.getUsername();
    if (this.usernameAdmin) {
      this.router.navigate(['/']);
    }
  }

  add() {
    this.username = 'admin';
    this.password = '12345678';

  }

  onLogin(){
    console.log(this.username);
    console.log(this.password);

    const payload = {
      username: this.username,
      password: btoa(this.password),
    }
    
    this.authService.login(payload).subscribe(res => {
      if (res.success) {
        console.log(res.success);
        
        this.router.navigate(['/']);
      } else {
        this.error = true;
      }
    });

  }

}
