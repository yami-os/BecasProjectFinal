import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private url = 'http://localhost:7282/Dolicitudes';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url);
  }

  getReporte() {
    return this.http.get<any>(this.url); 
  }

  update(solicitud: any) {
    return this.http.put<any>(`${this.url}/${solicitud.sol_Id}`, solicitud);
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}