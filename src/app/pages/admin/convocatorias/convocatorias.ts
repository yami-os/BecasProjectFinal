import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-convocatorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './convocatorias.html',
  styleUrls: ['./convocatorias.css']
})
export class AdminConvocatoriasComponent {

  lista: any[] = [];

  nueva = {
    con_Tipo: '',
    con_Fecha: ''
  };

  agregar() {
    this.lista.push({ ...this.nueva });
    this.nueva = { con_Tipo: '', con_Fecha: '' };
  }

  eliminar(i: number) {
    this.lista.splice(i, 1);
  }

}