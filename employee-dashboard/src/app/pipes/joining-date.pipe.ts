import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiningDate',
  standalone: true
})
export class JoiningDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) return '';
    
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    
    return date.toLocaleDateString('en-US', options);
  }
}
