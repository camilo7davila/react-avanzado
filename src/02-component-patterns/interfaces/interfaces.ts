export interface Product {
  id: string;
  title: string;
  img?: string
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count?: number;
  maxCount?: number
}

export interface ProductoCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: boolean;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
