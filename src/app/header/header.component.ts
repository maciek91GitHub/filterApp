import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  searchText: string;

  @Input()
  set searchTextInput(inputText: string) {
    this.search = inputText;
  };

  @Output()
  serachKeyChanged = new EventEmitter<string>();

  set search(text: string) {
    this.searchText = text;
    this.serachKeyChanged.emit(text);
  }

  get search() {
    return this.searchText;
  }
}
