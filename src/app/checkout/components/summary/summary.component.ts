import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/core/constants/Constants';
import { Cart } from 'src/app/product/interface/cart';
import { FormService } from '../../service/form.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'checkout-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  shippingCost: number = 50;
  cartItems: Cart[] = [];
  totalCost: number = 0;
  grandTotalCost: number = 0;
  vatAmount: number = 0;

  constructor(public dialog: MatDialog, private formSerive: FormService) {}

  ngOnInit(): void {
    this.getLocalCartItems();
    this.calculateTotalCost();
    this.formSerive.validForm.subscribe((valid) => {
      if (valid) {
        this.openConfirmationDialog();
      }
    });
  }

  getLocalCartItems() {
    if (
      localStorage.getItem(Constants.LOCAL_STORAGE_KEY) === '[]' ||
      localStorage.getItem(Constants.LOCAL_STORAGE_KEY) === null
    ) {
      this.cartItems = [];
    } else {
      this.cartItems = JSON.parse(
        localStorage.getItem(Constants.LOCAL_STORAGE_KEY) || '{}'
      );
    }
  }

  clearStorage() {
    localStorage.setItem(Constants.LOCAL_STORAGE_KEY, JSON.stringify([]));
  }

  calculateTotalCost() {
    this.totalCost = 0;
    this.cartItems.forEach((element) => {
      this.totalCost += element.price * element.quantity;
    });
    this.vatAmount = this.calculateVat(this.totalCost);
    this.grandTotalCost = this.totalCost + this.shippingCost;
  }

  calculateVat(amount: number) {
    return Math.ceil(amount * 0.2);
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        cartProduct: this.cartItems[0],
        cartItemsCount: this.cartItems.length - 1,
        grandTotal: this.grandTotalCost,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.clearStorage();
    });
  }

  checkFormValid() {
    this.formSerive.checkForm.next(true);
  }
}
