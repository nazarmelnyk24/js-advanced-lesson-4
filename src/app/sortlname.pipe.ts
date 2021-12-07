import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './Person';

@Pipe({
  name: 'sortlname'
})
export class SortlnamePipe implements PipeTransform {

  transform(value: Person[], sort?: string): Person[] {
    if (!value) return [];
    if (!sort) return value;
    if (sort === 'asc') {
      return value.sort((a, b) => {
        if (a.lname < b.lname) {
          return -1
        }
        if (a.lname > b.lname) {
          return 1;
        }
        return 0;
      })
    }
    return value.sort((a, b) => {
      if (a.lname > b.lname) {
        return -1
      }
      if (a.lname < b.lname) {
        return 1;
      }
      return 0;
    })
  }

}
