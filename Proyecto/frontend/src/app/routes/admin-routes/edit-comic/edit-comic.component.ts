import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from 'src/app/models/comic';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComicService } from 'src/app/services/http/comic.service';

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.scss']
})
export class EditComicComponent implements OnInit {

  public comic: Comic;
  public buttName = 'Editar';
  public datosCargados = false;


  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly comicService: ComicService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.comicService.getComic(params.get('comic')).subscribe(
          comic => {
            this.datosCargados = true;
            this.comic = comic[0];
          },
          error => {
            console.error(error);
          }
        )
      }
    )
  }

  editarComic(comic: Comic) {
    // console.log('Comic a editar: ', comic);
    this.comicService.editComic(comic).subscribe(
      comic => {
        alert('Comic editado con éxito');
        this.router.navigate(['/main', AuthService.userID])
      },
      error => {
        console.error(error);
      }
    );
  }
}
