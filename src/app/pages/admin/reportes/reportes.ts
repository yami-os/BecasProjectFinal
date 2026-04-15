import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/solicitud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reportes',
   imports: [CommonModule, FormsModule], 
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css']
})
export class ReportesComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: SolicitudService) {}

  ngOnInit(): void {
    this.service.getReporte().subscribe((res: any) => {
      this.lista = res.data || res || [];
    });
  }
}