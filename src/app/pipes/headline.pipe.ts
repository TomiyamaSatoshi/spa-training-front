import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headline'
})
export class HeadlinePipe implements PipeTransform {

  transform(content: string, headlineLength: number): string {

    if (content.length > headlineLength) {
      const headline = content.substring(0, headlineLength) + '...';
      return headline;
    } else {
      return content;
    }
  }

}
