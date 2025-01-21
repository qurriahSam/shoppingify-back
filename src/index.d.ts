export interface IItemName {
  name: string;
  image: string;
  note: string;
}

export interface ICategory {
  category: string;
  items: IItemName[];
}

interface IHistItems {
  _id: string;
  name: string;
  complete: boolean;
  count: number;
}
interface IShopItems {
  category: string;
  items: IHistItems[];
}
export interface IShopping {
  title: string;
  userId: string;
  list: IShopItems[];
  status: string;
  current: boolean;
  date: Date;
}

export interface IUser {
  email: string;
  password: string;
}
