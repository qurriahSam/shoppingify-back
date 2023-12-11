export interface IItemName {
  name: string;
  count: number;
  image: string;
  note: string;
}

export interface ICategory {
  category: string;
  items: IItemName[];
}
