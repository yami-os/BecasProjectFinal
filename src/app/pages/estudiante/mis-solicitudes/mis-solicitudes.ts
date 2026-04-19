import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/solicitud.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-solicitudes.html',
  styleUrls: ['./mis-solicitudes.css']
})
export class MiSolicitudesComponent implements OnInit {

  solicitudes: any[] = [];

  constructor(private service: SolicitudService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {

    this.service.getAll().subscribe((res: any) => {

      this.solicitudes = res.data || res;

      console.log(this.solicitudes);

    });

  }

}