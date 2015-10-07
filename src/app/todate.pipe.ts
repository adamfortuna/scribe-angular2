import {Pipe} from 'angular2/angular2'

@Pipe({ name: 'toDate' })

export class ToDatePipe {
  transform(value: string, args: any[]) {
    return Date.parse(value);
  }
}
