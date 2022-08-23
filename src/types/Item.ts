export type Item = {
  id: number;
  name: string;
  description: string;
  priority: string;
  sector: string;
  date: string;
  annotation: string;
  status: 'Pendente' | 'Em andamento' | 'Concluída';
  color: string;
}

export type ItemSector = {
  id: number;
  nameSector: string;
  colorSector: string;
}