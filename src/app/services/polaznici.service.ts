import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PolazniciService {
  constructor(private http: Http) {}

  getPolaznici(): any {
    return this.http
      .get("http://localhost:3000/polaznici")
      .map(res => res.json());
  }

  addPolaznik(post): any {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post("http://localhost:3000/polaznici", post, options)
      .map(res => res.json());
  }

  getPolaznik(id): any {
    return this.http
      .get("http://localhost:3000/polaznici/" + id)
      .map(res => res.json());
  }

  deletePolaznik(id): any {
    return this.http
      .delete("http://localhost:3000/polaznici/" + id)
      .map(res => res.json());
  }

  editPolaznik(polaznik): any {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post("http://localhost:3000/polaznici/" + polaznik.id, polaznik, options)
      .map(res => res.json());
  }
}
