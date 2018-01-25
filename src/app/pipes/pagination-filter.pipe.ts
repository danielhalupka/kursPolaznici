import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationFilter'
})
export class PaginationFilterPipe implements PipeTransform {

  transform(values: any, perPage:any, currentPage:any): any {

    return values.slice(currentPage*perPage,(currentPage*perPage)+perPage);
  }

}
