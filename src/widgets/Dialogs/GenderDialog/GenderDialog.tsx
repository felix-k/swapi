import { Field } from "formik";
import { TextField } from "formik-mui";
import { DialogForm } from "@/shared/ui";
import useDialogAction from "../useDialogAction";
import useDialog from "../useDialog";
import * as Yup from "yup";

const DIALOG_NAME = "GenderDialog";

const GenderDialog = ({ value }) => {
  useDialog(DIALOG_NAME);

  const handleAction = useDialogAction();

  return (
    <DialogForm
      name={DIALOG_NAME}
      title="Edit gender"
      button="Save"
      action={handleAction}
      formik={{
        initialValues: value,
        validationSchema: Yup.object().shape({
          gender: Yup.string().required("Required field"),
        }),
      }}
    >
      <Field
        fullWidth
        autoFocus
        name="gender"
        margin="normal"
        autoComplete="off"
        component={TextField}
        inputProps={{ maxLength: 100 }}
        placeholder="Enter gender"
        label="Hero gender"
      />
    </DialogForm>
  );
};

GenderDialog.dialogName = DIALOG_NAME;

export default GenderDialog;
