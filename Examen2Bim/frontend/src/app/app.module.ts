import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConsolasCrudComponent } from './routes/consolas-crud/consolas-crud.component';
import { NuevaConsolaComponent } from './routes/nueva-consola/nueva-consola.component';
import { NuevoVideojuegoComponent } from './routes/nuevo-videojuego/nuevo-videojuego.component';
import { VideojuegoCrudComponent } from './routes/videojuego-crud/videojuego-crud.component';
import { EditarVideojuegoComponent } from './routes/editar-videojuego/editar-videojuego.component';
import { EditarConsolaComponent } from './routes/editar-consola/editar-consola.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsolaService } from './services/consola.service';
import { VideojuegoService } from './services/videojuego.service';
import { ConsolaFormComponent } from './components/forms/consola-form/consola-form.component';
import { VideojuegoFormComponent } from './components/forms/videojuego-form/videojuego-form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/lists/list/list.component';
import { ConsolaListComponent } from './components/lists/consola-list/consola-list.component';
import { VideojuegoListComponent } from './components/lists/videojuego-list/videojuego-list.component';
import { SearchComponent } from './components/others/search/search.component';
import { HeaderComponent } from './components/others/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsolasCrudComponent,
    NuevaConsolaComponent,
    NuevoVideojuegoComponent,
    VideojuegoCrudComponent,
    EditarVideojuegoComponent,
    EditarConsolaComponent,
    ConsolaFormComponent,
    VideojuegoFormComponent,
    ListComponent,
    ConsolaListComponent,
    VideojuegoListComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConsolaService,
    VideojuegoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
