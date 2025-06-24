import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PlayerResponse {
  player: {
    idPlayer: string;
    strPlayer: string;
    strTeam: string;
    strSport: string;
    strNationality: string;
    dateBorn: string;
    strPosition: string;
    strThumb: string;
    strCutout: string;
    strDescriptionEN?: string;
    strDescriptionES?: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'https://www.thesportsdb.com/api/v1/json/3';

  constructor(private http: HttpClient) { }

  getPlayerInfo(playerName: string): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${this.apiUrl}/searchplayers.php?p=${encodeURIComponent(playerName)}`);
  }
}
