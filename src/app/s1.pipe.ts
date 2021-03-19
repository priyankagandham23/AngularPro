import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 's1'
})
export class S1Pipe implements PipeTransform {

  transform(value:number, first:number):any {
    return 'Power value'+Math.pow(value,4);
  }

}
