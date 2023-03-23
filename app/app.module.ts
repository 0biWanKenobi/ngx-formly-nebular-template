import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormlyFieldInputModule } from './ui/input/formly-field-input.module';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({
      name: 'default',
    }),
    FormlyModule.forRoot(),
    FormlyFieldInputModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
