import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from '../models/games.models';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly apiUrl = 'http://localhost:5000/firestore-graph-304fc/us-central1/api/goty';

  games: GameModel[] = [];

  constructor(private httpCLient: HttpClient) { }


  public getNominatedGames(): Observable<GameModel[]> {

    if (this.games.length === 0) {
      return this.httpCLient.get<GameModel[]>(this.apiUrl).pipe(
        tap(games => this.games = games)
      );
    }
    else {
      return of(this.games);
    }
  }

  public voteGame(gameId: string) {
    return this.httpCLient.post(`${this.apiUrl}/${gameId}`, {}).pipe(
      catchError(err => {
        return of(err.error);
      })
    );
  }

}
