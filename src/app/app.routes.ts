import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'portada', pathMatch: 'full' },

  {
    path: 'portada',
    loadComponent: () => import('./pages/portada/portada')
      .then(m => m.PortadaComponent)
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login')
      .then(m => m.LoginComponent)
  },

  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro')
      .then(m => m.RegistroComponent)
  },

  {
    path: 'convocatorias',
    loadComponent: () => import('./pages/estudiante/convocatoria/convocatoria')
      .then(m => m.ConvocatoriasComponent)
  },

  {
    path: 'mis-solicitudes',
    loadComponent: () => import('./pages/estudiante/mis-solicitudes/mis-solicitudes')
      .then(m => m.MiSolicitudesComponent)
  },

  {
    path: 'detalle',
    loadComponent: () => import('./pages/estudiante/detalle/detalle')
      .then(m => m.DetalleComponent)
  },

  {
    path: 'admin/convocatorias',
    loadComponent: () => import('./pages/admin/convocatorias/convocatorias')
      .then(m => m.AdminConvocatoriasComponent)
  },

  {
    path: 'admin/estudiantes',
    loadComponent: () => import('./pages/admin/estudiantes/estudiantes')
      .then(m => m.EstudiantesComponent)
  },

  {
    path: 'admin/solicitudes',
    loadComponent: () => import('./pages/admin/solicitudes/solicitudes')
      .then(m => m.SolicitudesComponent)
  },

  {
    path: 'admin/reportes',
    loadComponent: () => import('./pages/admin/reportes/reportes')
      .then(m => m.ReportesComponent)
  }

];