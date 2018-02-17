import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-listplayer',
  templateUrl: './listplayer.component.html',
  styleUrls: ['./listplayer.component.css']
})
export class ListplayerComponent implements OnInit {
  public players: any;
  private player: Player;

  constructor(
    private _playerService : PlayerService
  ) { 
  }

  ngOnInit() {
    this._playerService.all().subscribe(
      players => this.players = players.json(),
      error => console.log(error)
    )
  }

  deletePlayer(id: string){
    var conf = confirm("Are you sure you want to delete this player?");
    console.log("DELETE @ listplayer.comp" + id)
    if(conf == true){
    this._playerService.delete(id).subscribe(
      res => res.json(),
      error => console.log(error)  
    )
    location.reload()
  }else{
    console.log("Nothing is happening");
  }
  }
}
