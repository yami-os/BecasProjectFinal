import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/solicitud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
   imports: [CommonModule, FormsModule], 
  templateUrl: './mis-solicitudes.html',
  styleUrls: ['./mis-solicitudes.css']
})

export class MiSolicitudesComponent implements OnInit {

  solicitudes: any[] = [];
  usuario: any;

  constructor(private service: SolicitudService) {}

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('usuario')!);

    this.service.getAll().subscribe(res => {
      this.solicitudes = res.filter(
        (s: any) => s.sol_CorreoEst === this.usuario.correo
      );
    });
  }
}