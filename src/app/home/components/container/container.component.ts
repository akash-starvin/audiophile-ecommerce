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
  homeProducts: any = [];

  constructor(
    private mockDataService: MockDataService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getHomeProducts(Constants.HOME_PRODUCT_JSON_PATH);
    this.getAllProductData(Constants.PRODUCTS_JSON_PATH);
  }

  getHomeProducts(url: string) {
    this.mockDataService.getMockData(url).subscribe((result) => {
      this.homeProducts = result;
    });
  }

  getAllProductData(url: string) {
    this.mockDataService.getMockData(url).subscribe((result) => {
      this.saveToLocalStorage(result, Constants.LOCAL_STORAGE_PRODUCTS_LIST);
    });
  }

  saveToLocalStorage(object: Product[], path: string) {
    this.localStorageService.saveObject(object, path);
  }
}
