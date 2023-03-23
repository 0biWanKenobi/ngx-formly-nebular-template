import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormlyFieldInputModule } from "./ui/input/formly-field-input.module";
import { AppComponent } from "./app.component";
import { NbButtonModule, NbLayoutModule, NbThemeModule } from "@nebular/theme";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({
      name: "default",
    }),
    FormlyModule.forRoot(),
    FormlyFieldInputModule,
    NbLayoutModule,
    NbButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
