import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (args === null) {
        return value
      } else {
        // sort by name
        const tmpList = value.sort((a,b) => {
          if (a[args] < b[args]) {
            return -1;
          }
          else if (a[args] > b[args]) {
            return 1;
          } else {
            // names must be equal
            return 0;
          }
        });

        return (sort === 'asc') ? tmpList : tmpList.reverse();
      }
    } catch (e) {
      console.log('Algo Paso!');

      return value
    }

    return value;
  }

}
