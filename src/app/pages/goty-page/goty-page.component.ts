import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/models/games.models';
import { GameService } from '../../services/game.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty-page',
  templateUrl: './goty-page.component.html',
  styleUrls: ['./goty-page.component.scss']
})
export class GotyPageComponent implements OnInit {

  games: GameModel[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominatedGames().subscribe(resp => {
      this.games = resp;
    });
  }

  voteGame(gameId: string): void {
    this.gameService.voteGame(gameId).subscribe((resp: any) => {
      if(resp.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Thanks',
          text: resp.message
        });
      }
      else {
        Swal.fire({
          icon: 'error', 
          title: 'Oops!',
          text: resp.message
        })
      }
    });
  }

}
