import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FilesService } from "./shared/files.service";
import { AppRoutingModule } from "./app-routing.module";
import { FilterComponent } from "./main/filter/filter.component";
import { BasicViewComponent } from "./main/basic-view/basic-view.component";
import { ItemsListComponent } from "./main/items-list/items-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    BasicViewComponent,
    ItemsListComponent
  ],

  // AppRoutingModule simulates routing in real app
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
