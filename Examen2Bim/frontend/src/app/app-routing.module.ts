import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolasCrudComponent } from './routes/consolas-crud/consolas-crud.component';
import { EditarConsolaComponent } from './routes/editar-consola/editar-consola.component';
import { EditarVideojuegoComponent } from './routes/editar-videojuego/editar-videojuego.component';
import { NuevaConsolaComponent } from './routes/nueva-consola/nueva-consola.component';
import { NuevoVideojuegoComponent } from './routes/nuevo-videojuego/nuevo-videojuego.component';
import { VideojuegoCrudComponent } from './routes/videojuego-crud/videojuego-crud.component';


const routes: Routes = [
  {
    path: "consola",
    component: ConsolasCrudComponent
  },
  {
    path: "consola/nuevo",
    component: NuevaConsolaComponent
  },
  {
    path: "consola/:consola",
    component: VideojuegoCrudComponent
  },
  {
    path: "consola/:consola/editar",
    component: EditarConsolaComponent
  },
  {
    path: "consola/:consola/videojuego/nuevo",
    component: NuevoVideojuegoComponent
  },
  {
    path: "consola/:consola/videojuego/:videojuego/editar",
    component: EditarVideojuegoComponent
  },
  {
    path: "",
    redirectTo: "consola",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "consola",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
