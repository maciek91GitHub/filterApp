import { Component, OnInit } from "@angular/core";
import { FilesService } from "src/app/shared/files.service";
import { FileType, SortOrder, SortBy } from "src/app/shared/enums";
import FileUtils from "src/app/shared/file.utils";

@Component({
  selector: "app-basic-view",
  templateUrl: "./basic-view.component.html",
  styleUrls: ["./basic-view.component.css"]
})
export class BasicViewComponent implements OnInit {
  currentSearchText: string;
  currentTypeFilter: FileType;
  currentSortByFilter: SortBy;
  currentSortOrder: SortOrder;
  orderIcon: string;

  allFilesList: File[];
  filteredFilesList: File[];

  typeFiltersList: string[];
  sortTypeFiltersList: string[];
  sortDirectionsList: string[];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.filesService.getFiles().then(json => {
      this.allFilesList = Object.values(json).map(item => {
        return item as File;
      });
      this.resetFilters();
    });

    this.typeFiltersList = Object.values(FileType);
    this.sortTypeFiltersList = Object.values(SortBy);
  }

  onSearchByInputText(searchText: string) {
    this.currentSearchText = searchText;
    this.filterFilesList();
  }

  onTypeFilterChosen(chosenTypeFilter: string) {
    this.currentTypeFilter = chosenTypeFilter as FileType;
    this.filterFilesList();
  }

  private filterFilesList() {
    this.filteredFilesList = FileUtils.filterFilesList(
      this.currentSearchText,
      this.currentTypeFilter,
      this.allFilesList
    );
  }

  onSortByChosen(sortBy: string) {
    this.currentSortByFilter = sortBy as SortBy;
    this.sortFilesList();
  }

  onSortOrderChosen() {
    this.currentSortOrder =
      this.currentSortOrder === SortOrder.Ascending
        ? SortOrder.Descending
        : SortOrder.Ascending;
    this.sortFilesList();
  }

  private sortFilesList() {
    this.filteredFilesList = FileUtils.sortFiles(
      this.currentSortByFilter,
      this.currentSortOrder,
      this.filteredFilesList
    );
    this.setOrderIcon();
  }

  resetFilters() {
    this.currentSearchText = "";
    this.currentTypeFilter = FileType.All;
    this.currentSortByFilter = SortBy.Alphabetical;
    this.currentSortOrder = SortOrder.Ascending;
    this.filteredFilesList = FileUtils.sortFiles(
      SortBy.Alphabetical,
      SortOrder.Ascending,
      this.allFilesList
    );
    this.setOrderIcon();
  }

  setOrderIcon() {
    this.orderIcon =
      (this.currentSortOrder === SortOrder.Ascending
        ? SortOrder.Ascending
        : SortOrder.Descending
      ).toLowerCase() + "-sort.png";
  }
}
