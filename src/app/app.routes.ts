import { Routes, RouterModule } from '@angular/router';
import { PantallaDeInicioComponent } from './pantalla-de-inicio/pantalla-de-inicio.component';

export const routes: Routes = [
  { path: '', component: PantallaDeInicioComponent }, // La ruta raíz muestra el componente pantalla-de-inicio
  // Puedes agregar más rutas aquí según sea necesario
];

export const AppRoutingModule = RouterModule.forRoot(routes);
