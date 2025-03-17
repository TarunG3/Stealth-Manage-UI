import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinUs'
})
export class JoinUsPipe implements PipeTransform {

  transform(value: []): any {
    return value.filter(res => !!res);
  }

}
