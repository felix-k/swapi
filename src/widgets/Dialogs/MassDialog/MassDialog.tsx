import { Field } from "formik";
import { TextField } from "formik-mui";
import { DialogForm } from "@/shared/ui";
import useDialogAction from "../useDialogAction";
import useDialog from "../useDialog";
import * as Yup from "yup";

const DIALOG_NAME = "MassDialog";

const MassDialog = ({ value }) => {
  useDialog(DIALOG_NAME);

  const handleAction = useDialogAction();

  return (
    <DialogForm
      name={DIALOG_NAME}
      title="Edit mass"
      button="Save"
      action={handleAction}
      formik={{
        initialValues: value,
        validationSchema: Yup.object().shape({
          mass: Yup.string().required("Required field"),
        }),
      }}
    >
      <Field
        fullWidth
        autoFocus
        type="number"
        name="mass"
        margin="normal"
        autoComplete="off"
        component={TextField}
        placeholder="Enter mass"
        label="Hero mass"
      />
    </DialogForm>
  );
};

MassDialog.dialogName = DIALOG_NAME;

export default MassDialog;
