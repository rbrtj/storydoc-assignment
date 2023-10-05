interface Column {
  name: string;
}
export interface BoardInterface {
  name: string;
  isActive: boolean;
  columns: Column[];
}
