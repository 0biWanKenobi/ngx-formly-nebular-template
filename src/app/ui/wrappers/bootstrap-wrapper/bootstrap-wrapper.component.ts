import { Component, OnInit } from "@angular/core";
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: "formly-wrapper-bootstrap",
  template: `
    <ng-container
      *ngTemplateOutlet="
        nestedDivs;
        context: { classNames: props.classes, depth: 0 }
      "
    ></ng-container>

    <ng-template #nestedDivs let-classNames="classNames" let-depth="depth">
      <ng-container *ngFor="let className of classNames">
        <div
          [class]="className"
          *ngIf="
            depth < classNames.length - 1 && className == classNames[depth]
          "
        >
          <ng-container
            *ngTemplateOutlet="
              nestedDivs;
              context: { classNames: classNames, depth: depth + 1 }
            "
          ></ng-container>
        </div>
      </ng-container>
      <div
        *ngIf="depth === classNames.length - 1"
        class="{{ classNames[depth] }}"
      >
        <ng-container #fieldComponent></ng-container>
      </div>
    </ng-template>
  `,
})
export class BoostrapWrapperComponent extends FieldWrapper implements OnInit {
  ngOnInit() {
    console.log(this.props);
  }
}
