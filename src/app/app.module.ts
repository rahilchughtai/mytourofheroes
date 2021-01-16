import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./services/hero.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./services/message.service";

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, MatSliderModule],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService]
})
export class AppModule {}
