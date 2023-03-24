// panel-wrapper.component.ts
import { Component } from "@angular/core";
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: "formly-wrapper-column",
  template: `
    <div [class]="className">
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class ColumnWrapperComponent extends FieldWrapper {
  get className() {
    return `col-${this.props.size}-${this.props.width}`;
  }
}
