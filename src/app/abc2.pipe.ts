import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aBC2'
})
export class ABC2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
