import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NbCardModule, NbThemeModule } from "@nebular/theme";
import { FormModule } from "./pages/form/form.module";
import { LayoutModule } from "./ui/layout/layout.module";

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    NbCardModule,
    NbThemeModule.forRoot({
      name: "default",
    }),
    FormModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
