import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/estudiante.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiantes.html',
  styleUrls: ['./estudiantes.css']
})
export class EstudiantesComponent implements OnInit {

  lista: any[] = [];

  nuevo: any = {
    est_Nombre: '',
    est_Correo: '',
    est_Carrera: ''
  };

  constructor(private service: EstudianteService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.getAll().subscribe((res: any) => {
      this.lista = res.data || res;
    });
  }

  guardar(): void {

    if (
      !this.nuevo.est_Nombre ||
      !this.nuevo.est_Correo ||
      !this.nuevo.est_Carrera
    ) {
      alert('Completa los campos');
      return;
    }

    this.service.insert(this.nuevo).subscribe((res: any) => {

      this.lista.unshift(res);

      this.nuevo = {
        est_Nombre: '',
        est_Correo: '',
        est_Carrera: ''
      };

    });
  }

  eliminar(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.lista = this.lista.filter(e => e.est_Id !== id);
    });
  }
}