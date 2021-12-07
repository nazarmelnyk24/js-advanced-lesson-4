import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './Person';

@Pipe({
  name: 'sortnumber'
})
export class SortnumberPipe implements PipeTransform {

  transform(value: Person[], sort?: string): Person[] {
    if (!value) return [];
    if (!sort) return value;
    if (sort === 'asc') {
      return value.sort((a, b) => {
        const aNum = parseInt(a.number, 10);
        const bNum = parseInt(b.number, 10);
        if (aNum < bNum) {
          return -1
        }
        if (aNum > bNum) {
          return 1;
        }
        return 0;
      })
    }
    return value.sort((a, b) => {
      const aNum = parseInt(a.number, 10);
      const bNum = parseInt(b.number, 10);
      if (aNum > bNum) {
        return -1
      }
      if (aNum < bNum) {
        return 1;
      }
      return 0;
    })
  }

}
