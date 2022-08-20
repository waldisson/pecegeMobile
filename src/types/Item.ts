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