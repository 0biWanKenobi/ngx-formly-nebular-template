import { FormlyFieldConfig } from "@ngx-formly/core";
import { BoostrapWrapperComponent } from "src/app/ui/wrappers/bootstrap-wrapper/bootstrap-wrapper.component";

export const fields: FormlyFieldConfig[] = [
  {
    key: "name",
    type: "input",
    wrappers: [BoostrapWrapperComponent],
    props: {
      classes: ["row", "col-sm-6", "form-group"],
      label: "Field 1",
      placeholder: "Formly is terrific!",
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
];
