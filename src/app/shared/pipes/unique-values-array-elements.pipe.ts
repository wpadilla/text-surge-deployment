import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uniqueValuesArrayElementsPipe'})
export class UniqueValuesArrayElementsPipe implements PipeTransform {
  transform(value: any[], property: string, addedValues: string[] = []): string[] {
    if (!value) { return  []; }
    return [...addedValues, ...new Set(value.map(item => item[property]))];
  }
}
