import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main-route',
  templateUrl: './main-route.component.html',
  styleUrls: ['./main-route.component.scss']
})
export class MainRouteComponent implements OnInit {

  routeNames = ['Store','Usuario','Historial','Carrito','LogOut'];
  private userID: string;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this._route.paramMap.subscribe(
      params => {
        this.userID = params.get('id');
      }
    )
  }

  irA(ruta:string) {
    if(ruta==='LogOut') {
      console.log('salir');
      this._router.navigate(['/login']);
    } else
      this._router.navigate(['/main', this.userID, ruta]);
  }

}
