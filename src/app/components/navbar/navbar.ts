import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] 
})
export class NavbarComponent implements OnInit {

  usuario: any = null;
  esAdmin: boolean = false; 

  ngOnInit(): void {
    const user = localStorage.getItem('usuario');

    if (user) {
      this.usuario = JSON.parse(user);
      this.esAdmin = this.usuario?.rol === 'administrador';
    }
  }

  logout() {
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  }
}