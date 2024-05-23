// all kinds of types  or interfaces
export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[]; // this one is array of object types
  inventory: TInventory; // this one is only object type
};
