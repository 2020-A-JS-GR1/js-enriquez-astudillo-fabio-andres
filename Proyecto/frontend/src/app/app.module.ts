import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/http/user.service';
import { MainRouteComponent } from './routes/main-route/main-route.component';
import { RegisterRouteComponent } from './routes/register-route/register-route.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { RolService } from './services/http/rol.service';
import { EsClienteGuard } from './services/guards/cliente.guard';
import { AuthService } from './services/auth/auth.service';
import { HeaderComponent } from './components/interface-components/header/header.component';
import { UserRouteComponent } from './routes/main-routes/user-route/user-route.component';
import { RecordRouteComponent } from './routes/main-routes/record-route/record-route.component';
import { StoreRouteComponent } from './routes/main-routes/store-route/store-route.component';
import { CartRouteComponent } from './routes/main-routes/cart-route/cart-route.component';
import { ShowComicComponent } from './components/interface-components/show-comic/show-comic.component';
import { FilterComicComponent } from './components/interface-components/filter-comic/filter-comic.component';
import { ComicService } from './services/http/comic.service';
import { ComicFormComponent } from './components/forms/comic-form/comic-form.component';
import { CreateComicComponent } from './routes/admin-routes/create-comic/create-comic.component';
import { EditComicComponent } from './routes/admin-routes/edit-comic/edit-comic.component';
import { EsAdminGuard } from './services/guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginRouteComponent,
    LoginComponent,
    MainRouteComponent,
    RegisterRouteComponent,
    UserFormComponent,
    HeaderComponent,
    UserRouteComponent,
    RecordRouteComponent,
    StoreRouteComponent,
    CartRouteComponent,
    ShowComicComponent,
    FilterComicComponent,
    ComicFormComponent,
    CreateComicComponent,
    EditComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    UserService,
    RolService,
    EsClienteGuard,
    AuthService,
    ComicService,
    EsAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
