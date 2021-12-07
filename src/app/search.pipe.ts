import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './Person';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: Person[], searchfield?: string, people?: Person[]): Person[] {
    if(!value) return [];
    if(!searchfield) return value;
    return value.filter(person => person.fname.toLowerCase().includes(searchfield.toLowerCase()) || person.lname.toLowerCase().includes(searchfield.toLowerCase()) || person.number.toLowerCase().includes(searchfield.toLowerCase()));
  }

}
