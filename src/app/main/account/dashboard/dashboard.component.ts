import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // usernameAdmin;

  constructor(
    // private authService: AuthService,
  ) {}

  // ngOnInit() {
  //    this.usernameAdmin = this.authService.getUsername();
  // }
}