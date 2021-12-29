import { Menu } from '../interface/menu';

export class Constants {
  public static LOCAL_STORAGE_CART: string = 'AudioPhileCart';
  public static LOCAL_STORAGE_PRODUCTS_LIST: string = 'AudioPhileProductList';
  public static TOAST_POSITION: string = 'toast-bottom-center';
  public static PRODUCTS_JSON_PATH: string =
    '../../../../assets/json/products.json';
  public static FORM_JSON_PATH: string = '../../../../assets/json/form.json';
  public static HOME_PRODUCT_JSON_PATH: string =
    '../../../../assets/json/home-products.json';
  public static NavigationMenu: Menu[] = [
    {
      route: '/',
      name: 'home',
      image: '',
    },
    {
      route: '/headphones',
      name: 'headphones',
      image: '../../../assets/images/shared/desktop/image-headphones.png',
    },
    {
      route: '/speakers',
      name: 'speakers',
      image: '../../../assets/images/shared/desktop/image-speakers.png',
    },
    {
      route: '/earphones',
      name: 'earphones',
      image: '../../../assets/images/shared/desktop/image-earphones.png',
    },
  ];

  public static socialMediaIcons: Menu[] = [
    {
      route: 'https://www.facebook.com/',
      name: 'facebook',
      image: '../../../assets/icons/icon-facebook.svg',
    },
    {
      route: 'https://twitter.com/',
      name: 'twitter',
      image: '../../../assets/icons/icon-twitter.svg',
    },
    {
      route: 'https://www.instagram.com/',
      name: 'instagram',
      image: '../../../assets/icons/icon-instagram.svg',
    },
  ];
}
