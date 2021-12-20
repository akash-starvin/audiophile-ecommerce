import { Gallery } from './gallery';
import { Image } from './image';
import { Item } from './item';
import { Others } from './others';

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: Image;
  cartImage: string;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: Item[];
  gallery: Gallery;
  others: Others;
}
