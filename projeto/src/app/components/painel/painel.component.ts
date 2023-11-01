import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {

  constructor(private authService: AuthService,private router: Router) {}

deslogar() {
  this.authService.logout();
  this.router.navigate(['/login'])
}
}
