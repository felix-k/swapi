import { Field } from "formik";
import { TextField } from "formik-mui";
import { DialogForm } from "@/shared/ui";
import useDialogAction from "../useDialogAction";
import useDialog from "../useDialog";
import * as Yup from "yup";

const DIALOG_NAME = "NameDialog";

const NameDialog = ({ value }) => {
  useDialog(DIALOG_NAME);

  const handleAction = useDialogAction();

  return (
    <DialogForm
      name={DIALOG_NAME}
      title="Edit name"
      button="Save"
      action={handleAction}
      formik={{
        initialValues: value,
        validationSchema: Yup.object().shape({
          name: Yup.string().required("Required field"),
        }),
      }}
    >
      <Field
        fullWidth
        autoFocus
        name="name"
        margin="normal"
        autoComplete="off"
        component={TextField}
        inputProps={{ maxLength: 100 }}
        placeholder="Enter name"
        label="Hero name"
      />
    </DialogForm>
  );
};

NameDialog.dialogName = DIALOG_NAME;

export default NameDialog;