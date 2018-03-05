import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-playerstatus',
  templateUrl: './playerstatus.component.html',
  styleUrls: ['./playerstatus.component.css']
})
export class PlayerstatusComponent implements OnInit {
  public players: any;
  // private player: Player;

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit() {
    this._playerService.all().subscribe(
      players => this.players = players.json(),
      error => console.log(error)
    )
}

  changeStatus(id: string, n: number){
    // console.log("status button @ child component" + id);
    let _p = {_id: id, status: n}                       // Creates a mock object
    this._playerService.update(_p).subscribe(           // Passing a mock object to the playerService to update in the back end
      res => this.ngOnInit()
    )
  }
}
