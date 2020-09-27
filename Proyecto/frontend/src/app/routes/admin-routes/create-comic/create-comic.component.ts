import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/models/comic';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComicService } from 'src/app/services/http/comic.service';

@Component({
  selector: 'app-create-comic',
  templateUrl: './create-comic.component.html',
  styleUrls: ['./create-comic.component.scss']
})
export class CreateComicComponent implements OnInit {

  buttName = 'Crear';
  user: string;

  constructor(
    private readonly comicService: ComicService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  nuevoComic(comic: Comic) {
    this.comicService.addComic(comic).subscribe(
      comic => {
        alert('Comic creado');
        this.router.navigate(['main', AuthService.userID ,'/Store']);
      }, error => {
        console.error(error);
      }
    );
  }

}
