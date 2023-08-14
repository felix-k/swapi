import { Field } from "formik";
import { TextField } from "formik-mui";
import { DialogForm } from "@/shared/ui";
import useDialogAction from "../useDialogAction";
import useDialog from "../useDialog";
import * as Yup from "yup";

const DIALOG_NAME = "BirthDialog";

const BirthDialog = ({ value }) => {
  useDialog(DIALOG_NAME);

  const handleAction = useDialogAction();

  return (
    <DialogForm
      name={DIALOG_NAME}
      title="Edit birth year"
      button="Save"
      action={handleAction}
      formik={{
        initialValues: value,
        validationSchema: Yup.object().shape({
          birthYear: Yup.string().required("Required field"),
        }),
      }}
    >
      <Field
        fullWidth
        autoFocus
        name="birthYear"
        margin="normal"
        autoComplete="off"
        component={TextField}
        inputProps={{ maxLength: 100 }}
        placeholder="Enter birth year"
        label="Hero birth year"
      />
    </DialogForm>
  );
};

BirthDialog.dialogName = DIALOG_NAME;

export default BirthDialog;
