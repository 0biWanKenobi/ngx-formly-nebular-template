import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NbInputModule } from '@nebular/theme';
import { FormlyFieldInputComponent } from './formly-field-input.component';

@NgModule({
  imports: [
    NbInputModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [{ name: 'input', component: FormlyFieldInputComponent }],
    }),
  ],
  declarations: [FormlyFieldInputComponent],
  exports: [FormlyFieldInputComponent, ReactiveFormsModule],
})
export class FormlyFieldInputModule {}
