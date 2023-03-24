// panel-wrapper.component.ts
import { Component } from "@angular/core";
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: "formly-wrapper-row",
  template: `
    <div class="row">
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class RowWrapperComponent extends FieldWrapper {}
