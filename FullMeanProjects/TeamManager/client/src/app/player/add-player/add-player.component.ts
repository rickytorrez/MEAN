import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';
import { Player } from '../../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  private _playerService: PlayerService;
  private player: Player;

  constructor(
    _playerService: PlayerService
  ) { 
    this._playerService = _playerService;
    this.player = new Player(); ///
  }

  ngOnInit() {
  }

  createPlayer(){
    // console.log("@ child player component" + this.player.name);
    this._playerService.create(this.player).subscribe(
      player => player.json(),
      error => console.log(error)
    )
    location.reload()
  }
}
