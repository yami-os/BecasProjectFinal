import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from '../../../services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitud.html',
  styleUrls: ['./solicitud.css']
})
export class SolicitudComponent implements OnInit {

  idConvocatoria: number = 0;

  solicitud = {
    Sol_Estado: 'Pendiente',
    Sol_Comentarios: '',
    Sol_CorreoEst: '',
    Sol_CrearContra: '',
    Sol_Telefono: '',
    Sol_Direccion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private solicitudService: SolicitudService
  ) {}

  ngOnInit(): void {
    this.idConvocatoria = Number(this.route.snapshot.paramMap.get('id'));
  }

  guardarSolicitud(): void {

    this.solicitudService.insert(this.solicitud).subscribe({
      next: () => {
        alert('Solicitud enviada correctamente');

        this.solicitud = {
          Sol_Estado: 'Pendiente',
          Sol_Comentarios: '',
          Sol_CorreoEst: '',
          Sol_CrearContra: '',
          Sol_Telefono: '',
          Sol_Direccion: ''
        };
      },
      error: (err: any) => {
        console.error('Error al guardar solicitud', err);
        alert('Error al enviar la solicitud');
      }
    });
  }
}