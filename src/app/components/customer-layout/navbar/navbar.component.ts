import { Component } from '@angular/core';
import { LogoutComponent } from "../../shared/";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    LogoutComponent,
    RouterLink
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

}
