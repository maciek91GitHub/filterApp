import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FilesService {

  // simulate getting data from API
  async getFiles() {
    return fetch("../../assets/mock/files.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  }
}
