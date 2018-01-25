import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { PolazniciService } from "./services/polaznici.service";
import { PolazniciModel } from "./models/polaznici.model";

import { AppComponent } from "./app.component";
import { PolazniciComponent } from "./components/polaznici/polaznici.component";
import { SelektovanPolaznikComponent } from './components/selektovan-polaznik/selektovan-polaznik.component';
import { ImeFilterPipe } from './pipes/ime-filter.pipe';
import { PredavacFilterPipe } from './pipes/predavac-filter.pipe';
import { PaginationFilterPipe } from './pipes/pagination-filter.pipe';

const routes: Routes = [{ path: "", component: PolazniciComponent }];
@NgModule({
  declarations: [AppComponent, PolazniciComponent, SelektovanPolaznikComponent, ImeFilterPipe, PredavacFilterPipe, PaginationFilterPipe],
  imports: [FormsModule,RouterModule.forRoot(routes), HttpModule, BrowserModule],
  providers: [PolazniciService, PolazniciModel],
  bootstrap: [AppComponent]
})
export class AppModule {}
