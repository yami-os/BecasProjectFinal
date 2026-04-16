import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-convocatorias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './convocatoria.html',
  styleUrls: ['./convocatoria.css']
})
export class ConvocatoriasComponent {

  lista = [
    { id: 1, tipo: 'Beca Académica', fecha: '2025-01-10' },
    { id: 2, tipo: 'Beca Transporte', fecha: '2025-02-05' },
    { id: 3, tipo: 'Beca Alimenticia', fecha: '2025-02-05' }

  ];

  constructor(private route: ActivatedRoute) {}

  idConvocatoria: number = 0;

ngOnInit(): void {
  this.idConvocatoria = Number(this.route.snapshot.paramMap.get('id'));
}

}