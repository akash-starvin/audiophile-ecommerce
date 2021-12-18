import { Menu } from '../interface/menu';

export class Constants {
  public static NavigationMenu: Menu[] = [
    {
      route: '/',
      name: 'home',
      image: ''
    },
    {
      route: '/headphones',
      name: 'headphones',
      image: '../../../assets/images/shared/desktop/image-headphones.png'
    },
    {
      route: '/speakers',
      name: 'speakers',
      image: '../../../assets/images/shared/desktop/image-speakers.png'
    },
    {
      route: '/earphones',
      name: 'earphones',
      image: '../../../assets/images/shared/desktop/image-earphones.png'
    },
  ];
}
