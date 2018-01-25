import { Injectable } from '@angular/core';
import { PolazniciService } from '../services/polaznici.service';

@Injectable()
export class PolazniciModel {
  polaznici = [];

  constructor(private service:PolazniciService) { 
    service.getPolaznici().subscribe(polaznici => {
      this.polaznici = polaznici;
    })
  }

  

}
