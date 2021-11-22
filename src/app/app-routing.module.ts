import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormPeliculaComponent} from "./pages/form-pelicula/form-pelicula.component";
import {InicioComponent} from "./pages/inicio/inicio.component";
import {DetallaPeliculaComponent} from "./pages/detalla-pelicula/detalla-pelicula.component";
import {FormCalidadComponent} from "./pages/form-calidad/form-calidad.component";
import {ListCalidadComponent} from "./pages/list-calidad/list-calidad.component";

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"formPelicula/:id",
    component:FormPeliculaComponent
  },
  {
    path:"detalle/:id",
    component:DetallaPeliculaComponent
  },
  {
    path:"calidad/craete/:id",
    component:FormCalidadComponent
  },
  {
    path:"calidad/lista",
    component:ListCalidadComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
