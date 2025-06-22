export const listaClubes: Club[] = [
  { id: 1, nombre: 'Boca Juniors', pais: 'Argentina', liga: 'Liga Profesional' },
  { id: 2, nombre: 'River Plate', pais: 'Argentina', liga: 'Liga Profesional' },
  { id: 3, nombre: 'Bayern Munich', pais: 'Alemania', liga: 'Bundesliga' },
  { id: 4, nombre: 'Paris Saint-Germain', pais: 'Francia', liga: 'Ligue 1' },
  { id: 5, nombre: 'Flamengo', pais: 'Brasil', liga: 'Brasileirão' },
  { id: 6, nombre: 'Palmeiras', pais: 'Brasil', liga: 'Brasileirão' },
  { id: 7, nombre: 'Chelsea', pais: 'Inglaterra', liga: 'Premier League' },
  { id: 8, nombre: 'Borussia Dortmund', pais: 'Alemania', liga: 'Bundesliga' },
  { id: 9, nombre: 'Inter de Milán', pais: 'Italia', liga: 'Serie A' },
  { id: 10, nombre: 'Porto', pais: 'Portugal', liga: 'Primeira Liga' },
  { id: 11, nombre: 'Atlético de Madrid', pais: 'España', liga: 'LaLiga' },
  { id: 12, nombre: 'Real Madrid', pais: 'España', liga: 'LaLiga' },
  { id: 13, nombre: 'Manchester City', pais: 'Inglaterra', liga: 'Premier League' },
  { id: 14, nombre: 'Benfica', pais: 'Portugal', liga: 'Primeira Liga' },
  { id: 15, nombre: 'Juventus', pais: 'Italia', liga: 'Serie A' },
  { id: 16, nombre: 'Red Bull Salzburgo', pais: 'Austria', liga: 'Bundesliga Austriaca' },
  { id: 17, nombre: 'Al-Hilal', pais: 'Arabia Saudita', liga: 'Liga Profesional Saudí' },
  { id: 18, nombre: 'Ulsan Hyundai', pais: 'Corea del Sur', liga: 'K League 1' },
  { id: 19, nombre: 'Al Ahly', pais: 'Egipto', liga: 'Liga Premier Egipcia' },
  { id: 20, nombre: 'Wydad Casablanca', pais: 'Marruecos', liga: 'Botola Pro' },
  { id: 21, nombre: 'Monterrey', pais: 'México', liga: 'Liga MX' },
  { id: 22, nombre: 'Los Angeles FC', pais: 'Estados Unidos', liga: 'MLS' },
  { id: 23, nombre: 'Botafogo', pais: 'Brasil', liga: 'Brasileirão' },
  { id: 24, nombre: 'Urawa Red Diamonds', pais: 'Japón', liga: 'J1 League' },
  { id: 25, nombre: 'Al Ain', pais: 'Emiratos Árabes', liga: 'Liga Árabe del Golfo' },
  { id: 26, nombre: 'Étoile du Sahel', pais: 'Túnez', liga: 'Liga Profesional Tunecina' },
  { id: 27, nombre: 'Mamelodi Sundowns', pais: 'Sudáfrica', liga: 'Premier Soccer League' },
  { id: 28, nombre: 'Pachuca', pais: 'México', liga: 'Liga MX' },
  { id: 29, nombre: 'Seattle Sounders', pais: 'Estados Unidos', liga: 'MLS' },
  { id: 30, nombre: 'Auckland City', pais: 'Nueva Zelanda', liga: 'NZ Premiership' },
  { id: 31, nombre: 'Fluminense', pais: 'Brasil', liga: 'Brasileirão' },
  { id: 32, nombre: 'Inter Miami', pais: 'Estados Unidos', liga: 'MLS' }
];


export interface Club {
  id: number; 
  nombre: string;
  pais: string;
  liga: string;
  escudo?: string; // Opcional

}