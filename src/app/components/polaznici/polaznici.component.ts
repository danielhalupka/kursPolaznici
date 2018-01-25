import { Component, OnInit } from "@angular/core";
import { PolazniciModel } from "../../models/polaznici.model";

@Component({
  selector: "polaznici",
  templateUrl: "./polaznici.component.html"
})
export class PolazniciComponent implements OnInit {
  selektovanPolaznik;

  currentPage = 0;
  perPage = 5;
  constructor(private polazniciModel: PolazniciModel) {}

  ngOnInit() {}

  resetCurrentPage(){
    this.currentPage = 0;
  }

  pagerConstruct(pages){
    if(!pages){
      return [];
    }
    return Array(Math.ceil(pages)).fill(0).map((x,i)=>i);
  }

  selektujPolaznika(polaznik) {
    this.selektovanPolaznik = polaznik;
  }

  switchPage(pageNumber){
    this.currentPage = pageNumber;
  }

  nextPage(){
    if(this.currentPage+1 < this.polazniciModel.polaznici.length/this.perPage){
      this.currentPage++;
    }
  }

  previousPage(){
    if(this.currentPage > 0){
      this.currentPage--;
    }
  }
}
