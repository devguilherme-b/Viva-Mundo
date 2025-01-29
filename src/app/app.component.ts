import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from "./my-header/my-header.component";
import { MyHomeComponent } from "./my-home/my-home.component";
import { DestinationsComponent } from "./destinations/destinations.component";
import { DepoimentsComponent } from "./depoiments/depoiments.component";
import { CtaFinishComponent } from "./cta-finish/cta-finish.component";
import { MyFormComponent } from "./my-form/my-form.component";
import { MyFooterComponent } from "./my-footer/my-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyHeaderComponent, MyHomeComponent, DestinationsComponent, DepoimentsComponent, CtaFinishComponent, MyFormComponent, MyFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viva-mundo';
}
