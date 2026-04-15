import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/estudiante.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estudiantes',
   imports: [CommonModule, FormsModule], 
  templateUrl: './estudiantes.html',
  styleUrls: ['./estudiantes.css']
})
export class EstudiantesComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: EstudianteService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((res: any) => {
      this.lista = res.data || res;
    });
  }

  eliminar(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}