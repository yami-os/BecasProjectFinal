import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private url = 'https://localhost:7282/api/Solicitud';

  constructor(private http: HttpClient) {}

  getAll(){
  return this.http.get('https://localhost:7282/api/Solicitud');
}
  getReporte() {
    return this.http.get<any>(this.url); 
  }

  insert(solicitud: any) {
    return this.http.post<any>(this.url, solicitud);
  }

  update(solicitud: any) {
    return this.http.put<any>(`${this.url}/${solicitud.sol_Id}`, solicitud);
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}