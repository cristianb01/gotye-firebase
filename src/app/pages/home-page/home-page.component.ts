import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { GameModel } from '../../models/games.models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  gamesVotes: GameModel[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
    .pipe(
      map((resp: any) => resp.map( ( {name, votes}: any ) => ( {name, value: votes} ) ))
    )
    .subscribe(resp => {
      this.gamesVotes = resp;
    });
  }

}
