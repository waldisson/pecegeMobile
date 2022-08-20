export type Item = {
  id: number;
  name: string;
  description: string;
  priority: string;
  sector: string;
  date: string;
  annotation: string;
  status: 'Pendente' | 'Em andamento' | 'Concluída';
}

export type SectorItem = {
  id: number;
  name: string;
  color: string;
}