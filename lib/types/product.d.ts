declare interface Product {
  _id: string;
  userId: User | string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  price: number;
  viewCount: number;
  updatedAt: Date
  createdAt: Date
}

interface ProductsResponse {
  result: string;
  data: Product[];
}

