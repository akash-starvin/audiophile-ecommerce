import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/constants/Constants';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MockDataService } from 'src/app/core/services/mock-data.service';
import { Product } from 'src/app/product/interface/product';

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

  productDisplay: any = {
    name: 'ZX7 Speaker',
    slug: 'zx7-speaker',
    category: 'speakers',
    image: {
      mobile: '../../../../assets/images/home/mobile/image-speaker-zx7.jpg',
      tablet: '../../../../assets/images/home/tablet/image-speaker-zx7.jpg',
      desktop: '../../../../assets/images/home/desktop/image-speaker-zx7.jpg',
    },
  };

  constructor(
    private mockDataService: MockDataService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getAllProductData(Constants.PRODUCTS_JSON_PATH);
  }

  getAllProductData(url: string) {
    this.mockDataService.getMockData(url).subscribe((data) => {
      this.saveToLocalStorage(data, Constants.LOCAL_STORAGE_PRODUCTS_LIST);
    });
  }

  saveToLocalStorage(object: Product[], path: string) {
    this.localStorageService.saveObject(object, path);
  }
}
