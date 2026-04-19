import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/solicitud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes.html',
  styleUrls: ['./solicitudes.css']
})
export class SolicitudesComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: SolicitudService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.getAll().subscribe((res: any) => {

      console.log(res);

      this.lista = res.data || res;

    });
  }

}