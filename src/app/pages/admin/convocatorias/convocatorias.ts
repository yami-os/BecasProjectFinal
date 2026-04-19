import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvocatoriaService } from '../../../services/convocatoria.service';

@Component({
  selector: 'app-admin-convocatorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './convocatorias.html',
  styleUrls: ['./convocatorias.css']
})
export class AdminConvocatoriasComponent implements OnInit {

  lista: any[] = [];

  nueva: any = {
    con_Tipo: '',
    con_Fecha: ''
  };

  constructor(private service: ConvocatoriaService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.getAll().subscribe((res: any) => {
      this.lista = res.data || res;
    });
  }

  agregar(): void {

    if (!this.nueva.con_Tipo || !this.nueva.con_Fecha) {
      alert('Completa los campos');
      return;
    }

    this.service.insert(this.nueva).subscribe(() => {

      this.cargar();

      this.nueva = {
        con_Tipo: '',
        con_Fecha: ''
      };

    });
  }

  eliminar(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.lista = this.lista.filter(x => x.con_Id !== id);
    });
  }
}