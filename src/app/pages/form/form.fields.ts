import { FormControl } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { combineLatest, map, merge, of } from "rxjs";
import { FormlyFieldCheckboxComponent } from "src/app/ui/checkbox/formly-field-checkbox.component";

export const fields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: "row",
    fieldGroup: [
      {
        key: "name",
        type: "input",
        className: "mb-3 col-6",
        props: {
          label: "Name",
          placeholder: "Name",
        },
      },
      {
        key: "surname",
        type: "input",
        className: "mb-3 col-6",
        props: {
          label: "Surname",
          placeholder: "Surname",
          required: true,
        },
        validators: {
          minLength: {
            expression: (control: FormControl) => control.value?.length > 3,
            message: "Surname must be longer than 3 characters",
          },
        },
      },
      {
        key: "fullname",
        type: "input",
        className: "mb-3 col-6",
        props: {
          label: "Full Name",
          placeholder: "Full Name",
          disabled: true,
          async: true,
          value$: of(null),
        },
        hooks: {
          onInit: (field) => {
            const name = field.form.get("name");
            const surname = field.form.get("surname");

            field.props.value$ = combineLatest([
              merge(of(name.value), name.valueChanges),
              merge(of(surname.value), surname.valueChanges),
            ]).pipe(
              map(([n, s]) => {
                field.formControl.setValue(`${n} ${s ?? ""}`.trimEnd());
                return true;
              })
            );
          },
        },
      },
      {
        key: "role",
        type: "select",
        className: "mb-3 col-3",
        expressions: {
          "props.disabled": (field) => {
            return !field.form.get("roleEnabled").value;
          },
        },
        props: {
          label: "Role",
          selectOpts: [
            { label: "One", value: "one" },
            { label: "Two", value: "two" },
          ],
        },
      },
      {
        key: "roleEnabled",
        id: "roleEnabled",
        className: "col-3 align-self-center",
        type: FormlyFieldCheckboxComponent,
        props: {
          label: "Enable Role",
          field: "roleEnabled",
        },
      },
    ],
  },
];
