import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormPeliculaComponent} from './pages/form-pelicula/form-pelicula.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetallaPeliculaComponent} from './pages/detalla-pelicula/detalla-pelicula.component';
import {FormCalidadComponent} from './pages/form-calidad/form-calidad.component';
import {ListCalidadComponent} from './pages/list-calidad/list-calidad.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPeliculaComponent,
    InicioComponent,
    DetallaPeliculaComponent,
    FormCalidadComponent,
    ListCalidadComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
