import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player.service';

interface Player {
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
}

@Component({
  selector: 'app-player-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  player: Player | null = null;
  loading = true;
  error: string | null = null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayerInfo('Miguel Merentiel');
  }

  loadPlayerInfo(playerName: string): void {
    this.loading = true;
    this.error = null;
    
    this.playerService.getPlayerInfo(playerName).subscribe({
      next: (response) => {
        if (response.player && response.player.length > 0) {
          // Buscar específicamente a Merentiel ya que la API puede devolver múltiples resultados
          const merentiel = response.player.find(p => 
            p.strPlayer.toLowerCase().includes('merentiel')
          );
          this.player = merentiel || response.player[0];
        } else {
          this.error = 'No se encontró información del jugador';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar la información del jugador:', err);
        this.error = 'Error al cargar la información del jugador';
        this.loading = false;
      }
    });
  }

  getAge(birthDate: string): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    
    return age;
  }
}
