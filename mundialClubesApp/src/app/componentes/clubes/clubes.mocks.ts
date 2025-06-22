export const listaClubes:Club[] =  [
  { id: 1, nombre: 'Boquita', pais: 'Argentina', liga: 'AFA' },
  { id: 2, nombre: 'riBer', pais: 'Argentina', liga: 'AFA' },
  { id: 3, nombre: 'PSG', pais: 'Francia', liga: 'Liga Fanchute' },
  { id: 4, nombre: 'Real Madrid', pais: 'España', liga: 'Liga Española' },
  { id: 5, nombre: 'Barcelona', pais: 'España', liga: 'Liga Española' }
];


export interface Club {
  id: number; 
  nombre: string;
  pais: string;
  liga: string;
}