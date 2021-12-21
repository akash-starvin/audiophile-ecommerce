import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(num: number): string {
    return '$ ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
