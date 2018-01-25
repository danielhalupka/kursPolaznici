import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'predavacFilter'
})
export class PredavacFilterPipe implements PipeTransform {

  transform(values: any, queryBool:any): any {
    let result = [];
    if(!queryBool){
      return values;
    }
    for(let i=0; i< values.length; i++){
      if(values[i].predavac){
        result.push(values[i]);
      }
    }
    return result;
  }


}
