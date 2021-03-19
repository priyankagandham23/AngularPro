import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aBC'
})
export class ABCPipe implements PipeTransform {

  transform(value: number, last: number):string {
    return 'My Name is of  '+last;
  }

}
