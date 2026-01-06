export interface Product {
  id: string;
  name: string;
  category: 'Insektisida' | 'Fungisida' | 'Herbisida' | 'Pupuk' | 'Benih' | 'Alat Tani';
  price: number;
  image: string;
  rating: number;
  sold: number;
  location: string;
  activeIngredient: string;
  form: 'Cair' | 'Serbuk' | 'Granul';
  regNumber: string;
  description: string;
  sellerName: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  phone: string;
  address: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}
