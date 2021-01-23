import { Injectable } from "@angular/core";

@Injectable()
export class NewsdataService {
  constructor() {}

  getData() {
    fetch(
      "https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "SIGN-UP-FOR-KEY",
          "x-rapidapi-host": "google-news.p.rapidapi.com"
        }
      }
    )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
