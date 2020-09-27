import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRouteComponent } from './routes/main-route/main-route.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { RegisterRouteComponent } from './routes/register-route/register-route.component';
import { EsClienteGuard } from './services/guards/cliente.guard';
import { UserRouteComponent } from './routes/main-routes/user-route/user-route.component';
import { RecordRouteComponent } from './routes/main-routes/record-route/record-route.component';
import { CartRouteComponent } from './routes/main-routes/cart-route/cart-route.component';
import { StoreRouteComponent } from './routes/main-routes/store-route/store-route.component';
import { CreateComicComponent } from './routes/admin-routes/create-comic/create-comic.component';
import { EditComicComponent } from './routes/admin-routes/edit-comic/edit-comic.component';
import { EsAdminGuard } from './services/guards/admin.guard';


const routes: Routes = [
  {
    path: "login",
    component: LoginRouteComponent
  },
  {
    path: "register",
    component: RegisterRouteComponent
  },
  {
    path: "main/:id",
    component: MainRouteComponent,
    canActivate: [
      EsClienteGuard
    ],
    children: [
      {
        path: "Usuario",
        component: UserRouteComponent
      },
      {
        path: "Historial",
        component: RecordRouteComponent
      },
      {
        path: "Carrito",
        component: CartRouteComponent
      },
      {
        path: "Store",
        component: StoreRouteComponent
      },
      {
        path: "Nuevo",
        component: CreateComicComponent,
        canActivate: [
          EsAdminGuard
        ]
      },
      {
        path: "Editar/:comic",
        component: EditComicComponent,
        canActivate: [
          EsAdminGuard
        ]
      },
      {
        path: "",
        redirectTo: "Store",
        pathMatch: "full"
      },
    ]
  },
  {
    path: "main",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  // {
  //   path: "**",
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
