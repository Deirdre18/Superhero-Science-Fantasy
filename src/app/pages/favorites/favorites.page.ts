import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FavoriteService } from '../../services/favorite.service';
import { ApiService } from '../../services/api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  films = [];

  constructor(private storage: Storage, private favService: FavoriteService, private apiService: ApiService) { }

  ngOnInit() {
    this.favService.getAllFavoriteFilms().then(data => {
      console.log('favs: ', data); // ["1", "5", "3"]
      this.loadFilmData(data);
    });
  }

  loadFilmData(favFilms: string[]) {
    const observables = [];

    // Create an API call for every saved movie ID
    for (let id of favFilms) {
      observables.push(this.apiService.getFilm(id));
    }

    // Wait until all observables are finished
    forkJoin(observables).subscribe(result => {
      console.log('filmd data: ', result);         
      this.films = result;
    })
  }
}