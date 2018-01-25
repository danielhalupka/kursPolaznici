import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[selektovan-polaznik]",
  templateUrl: "./selektovan-polaznik.component.html"
})
export class SelektovanPolaznikComponent implements OnInit {
  @Input("polaznik") polaznik: any;
  constructor() {}

  ngOnInit() {}
}
