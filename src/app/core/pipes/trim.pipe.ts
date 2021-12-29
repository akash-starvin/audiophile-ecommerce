import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
  removeWordsArray = ['Headphones', 'Speaker', 'Earphones', 'Wireless'];
  transform(str: string): string {
    return this.removeWordsArray.reduce(
      (result, word) => result.replace(word, ''),
      str
    );
  }
}
