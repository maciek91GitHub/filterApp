import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filterTitle: string;

  @Input()
  filterOptions: string[];

  @Input()
  currentFilter: string;

  @Output()
  filterKeyChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onOptionSelected(selectedOption: string) {
    this.filterKeyChanged.emit(selectedOption);
  }

}
