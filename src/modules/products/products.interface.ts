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

// const products: TProducts = {
//   name: "iPhone 13",
//   description: "A sleek and powerful smartphone with cutting-edge features.",
//   price: 999,
//   category: "Electronics",
//   tags: ["smartphone", "Apple", "iOS"],
//   variants: [
//     {
//       type: "Color",
//       value: "Midnight Blue",
//     },
//     {
//       type: "Storage Capacity",
//       value: "256GB",
//     },
//   ],
//   inventory: {
//     quantity: 50,
//     inStock: true,
//   },
// };
