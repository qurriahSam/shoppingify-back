export interface IItemName {
  name: string;
  count: number;
}

export interface ICategory {
  category: string;
  items: IItemName[];
}
