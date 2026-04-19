import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/solicitud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitudes.html',
  styleUrls: ['./solicitudes.css']
})
export class SolicitudesComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: SolicitudService) {}

  ngOnInit() {
    this.service.getAll().subscribe(res => this.lista = res);
  }

  aprobar(s: any) {
    s.sol_Estado = 'Aprobada';
    this.service.update(s).subscribe(() => this.ngOnInit());
  }

  rechazar(s: any) {
    s.sol_Estado = 'Rechazada';
    this.service.update(s).subscribe(() => this.ngOnInit());
  }
}