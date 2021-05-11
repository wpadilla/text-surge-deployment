import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uniqueValuesArrayElementsPipe'})
export class UniqueValuesArrayElementsPipe implements PipeTransform {
  transform(value: any[], property: string): string[] {
    return [...new Set(value.map(item => item[property]))];
  }
}
