import { SortBy, FileType, SortOrder } from "./enums";

export default class FileUtils {
  //basic search by text filter
  static filterFilesList(
    filterText: string,
    filterType: string,
    filesList: File[]
  ): File[] {
    return !filesList
      ? []
      : filesList
          .filter(file => {
            return (
              filterType === FileType.All ||
              file.type === (filterType as FileType)
            );
          })
          .filter(file => {
            return (
              file.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
            );
          });
  }

  static sortFiles(sortBy: string, order: string, filesList: File[]): File[] {
    const sortingKey = sortBy === SortBy.Alphabetical ? "name" : "created";
    const orderModifier = (order as SortOrder) === SortOrder.Ascending ? 1 : -1;
    return filesList.sort(
      (fileA, fileB) =>
        (fileA[sortingKey] > fileB[sortingKey] ? 1 : -1) * orderModifier
    );
  }
}
