import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tsFindByID'})
export class FindPipe implements PipeTransform {
  transform(data: any[], item: any ): any {

    return data.find(dataItem => JSON.stringify(dataItem) === JSON.stringify(item));
  }
}
