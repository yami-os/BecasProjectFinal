import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConvocatoriaService } from '../../../services/convocatoria.service';

@Component({
  selector: 'app-convocatorias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './convocatoria.html',
  styleUrls: ['./convocatoria.css']
})
export class ConvocatoriasComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: ConvocatoriaService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.getAll().subscribe((res: any) => {
      this.lista = res.data || res;
    });
  }
}