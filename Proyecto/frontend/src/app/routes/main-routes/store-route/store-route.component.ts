import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/models/comic';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComicService } from 'src/app/services/http/comic.service';

@Component({
  selector: 'app-store-route',
  templateUrl: './store-route.component.html',
  styleUrls: ['./store-route.component.scss']
})
export class StoreRouteComponent implements OnInit {

  generos = ['Todos', 'DC', 'Marvel', 'Manga'];
  actions = ['Carrito'];
  comics: Comic[] = [];
  comicsAll: Comic[] = [];
  
  esAdmin: boolean = false;
  user: string;

  constructor(
    private readonly comicService: ComicService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    console.log(AuthService.userID);
    if(AuthService.roles.some(n=>n===1)) {
      this.esAdmin = true;
      this.actions.push('Editar');
    }
    this.comicService.getComics().subscribe(
      comics => {
        if(AuthService.roles.some(n=>n===1)) 
          this.comics = comics;
        else
          this.comics = comics.filter(n=>n.estado!=='Descontinuado');
        this.comicsAll = this.comics;
      },
      error => {
        console.error(error);
      }
    )
  }

  selectGenero(genero: string) {
    this.comics = this.comicsAll;
    if(genero !== 'Todos') {
      this.comics = this.comics.filter( comic => comic.genero === genero );
    }
  }

  event(accion: string, comic: Comic) {
    switch(accion) {
      case 'Editar':
        this.irA('Editar/' + comic.id);
        console.log('Editar');
        break;
      case 'Carrito':
        ComicService.carrito.push(comic);
        alert('Elemento agregado al carrito');
        console.log('Carrito');
        break;
    }
  }
  
  irA(ruta: string) {
    console.log('/main' + AuthService.userID + ruta);
    this.router.navigateByUrl('/main/' + AuthService.userID + '/' + ruta);
  }
}
