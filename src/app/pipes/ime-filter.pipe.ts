import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imeFilter'
})
export class ImeFilterPipe implements PipeTransform {

  transform(values: any, queryString:any): any {
    let result = [];
    if(!queryString){
      return values;
    }
    for(let i=0; i< values.length; i++){
      if((values[i].ime.toLowerCase().indexOf(queryString.toLowerCase()) > -1) || (values[i].prezime.toLowerCase().indexOf(queryString.toLowerCase()) > -1) ){
        result.push(values[i]);
      }
    }
    return result;
  }

}
