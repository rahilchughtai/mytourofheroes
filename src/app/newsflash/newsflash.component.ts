import { Component, OnInit } from "@angular/core";
import { NewsdataService } from "../services/newsdata.service";

@Component({
  selector: "app-newsflash",
  templateUrl: "./newsflash.component.html",
  styleUrls: ["./newsflash.component.css"]
})
export class NewsflashComponent implements OnInit {
  constructor(private newsFlashService: NewsflashService) {}

  ngOnInit() {}
}
