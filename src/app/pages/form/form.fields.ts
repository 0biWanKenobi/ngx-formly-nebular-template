import { FormlyFieldConfig } from "@ngx-formly/core";
import { combineLatest, map, merge, of } from "rxjs";
import { FormlyFieldCheckboxComponent } from "src/app/ui/checkbox/formly-field-checkbox.component";

export const fields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: "form-row",
    fieldGroup: [
      {
        key: "name",
        type: "input",
        className: "form-group col-6",
        props: {
          label: "Name",
          placeholder: "Name",
        },
      },
      {
        key: "surname",
        type: "input",
        className: "form-group col-6",
        props: {
          label: "Surname",
          placeholder: "Surname",
        },
      },
      {
        key: "fullname",
        type: "input",
        className: "form-group col-6",
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
        className: "form-group col-3",
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
        className: "form-group col-3",
        type: FormlyFieldCheckboxComponent,
        props: {
          label: "Enable Role",
          field: "roleEnabled",
        },
      },
    ],
  },
];
