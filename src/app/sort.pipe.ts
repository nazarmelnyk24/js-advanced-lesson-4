import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './Person';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Person[], sort?: string): Person[] {
    if (!value) return [];
    if (!sort) return value;
    if (sort === 'asc') {
      return value.sort((a, b) => {
        if (a.fname < b.fname) {
          return -1
        }
        if (a.fname > b.fname) {
          return 1;
        }
        return 0;
      })
    }
    return value.sort((a, b) => {
      if (a.fname > b.fname) {
        return -1
      }
      if (a.fname < b.fname) {
        return 1;
      }
      return 0;
    })
  }

}