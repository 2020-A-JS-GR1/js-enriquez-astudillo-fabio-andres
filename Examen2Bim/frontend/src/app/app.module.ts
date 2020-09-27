import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConsolasCrudComponent } from './routes/consolas-crud/consolas-crud.component';
import { NuevaConsolaComponent } from './routes/nueva-consola/nueva-consola.component';
import { NuevoVideojuegoComponent } from './routes/nuevo-videojuego/nuevo-videojuego.component';
import { VideojuegoCrudComponent } from './routes/videojuego-crud/videojuego-crud.component';
import { ErrorComponent } from './routes/error/error.component';
import { EditarVideojuegoComponent } from './routes/editar-videojuego/editar-videojuego.component';
import { EditarConsolaComponent } from './routes/editar-consola/editar-consola.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsolasCrudComponent,
    NuevaConsolaComponent,
    NuevoVideojuegoComponent,
    VideojuegoCrudComponent,
    ErrorComponent,
    EditarVideojuegoComponent,
    EditarConsolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
