import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  bannerData: any = {
    new: true,
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II headphones',
    category: 'headphones',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    image: {
      mobile: './../../../../assets/images/home/mobile/image-header.jpg',
      tablet: './../../../../assets/images/home/tablet/image-header.jpg',
      desktop: './../../../../assets/images/home/desktop/image-hero.jpg',
    },
  };

  productDisplay: any = [
    {
      name: 'ZX7 Speaker',
      slug: 'zx7-speaker',
      category: 'speakers',
      width: 'full',
      image: {
        mobile: '../../../../assets/images/home/mobile/image-speaker-zx7.jpg',
        tablet: '../../../../assets/images/home/tablet/image-speaker-zx7.jpg',
        desktop: '../../../../assets/images/home/desktop/image-speaker-zx7.jpg',
      },
    },
    {
      name: null,
      slug: null,
      category: null,
      image: {
        mobile: '../../../../assets/images/home/mobile/image-earphones-yx1.jpg',
        tablet: '../../../../assets/images/home/tablet/image-earphones-yx1.jpg',
        desktop:
          '../../../../assets/images/home/desktop/image-earphones-yx1.jpg',
      },
    },
    {
      name: 'YX1 Wireless Earphones',
      slug: 'yx1-earphones',
      category: 'earphones',
      image: null,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
