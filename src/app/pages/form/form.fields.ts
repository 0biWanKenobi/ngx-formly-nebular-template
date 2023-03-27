import { FormlyFieldConfig } from "@ngx-formly/core";
import { combineLatest, map, merge, of } from "rxjs";
import { FormlyFieldCheckboxComponent } from "src/app/ui/checkbox/formly-field-checkbox.component";
import { BoostrapWrapperComponent } from "src/app/ui/wrappers/bootstrap-wrapper/bootstrap-wrapper.component";

export const fields: FormlyFieldConfig[] = [
  {
    key: "name",
    type: "input",
    wrappers: [BoostrapWrapperComponent],
    props: {
      classes: ["row", "col-sm-6", "form-group"],
      label: "Field 1",
      placeholder: "Name",
    },
  },
  {
    key: "surname",
    type: "input",
    wrappers: [BoostrapWrapperComponent],
    props: {
      classes: ["row", "col-sm-6", "form-group"],
      label: "Field 1",
      placeholder: "Surname",
    },
  },
  {
    key: "fullname",
    type: "input",
    wrappers: [BoostrapWrapperComponent],
    props: {
      classes: ["row", "col-sm-6", "form-group"],
      label: "Field 1",
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
    wrappers: [BoostrapWrapperComponent],
    props: {
      classes: ["row", "col-sm-6", "form-group"],
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
];
