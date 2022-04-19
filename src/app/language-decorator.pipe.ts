import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageDecorator'
})
export class LanguageDecoratorPipe implements PipeTransform {

  transform(value: any, args: any) {
    if(value === "HTML"){
      return args + value + args;
    }
    return value;
  }

}
