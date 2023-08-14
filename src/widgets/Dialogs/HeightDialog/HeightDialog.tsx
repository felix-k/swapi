import { Field } from "formik";
import { TextField } from "formik-mui";
import { DialogForm } from "@/shared/ui";
import useDialogAction from "../useDialogAction";
import useDialog from "../useDialog";
import * as Yup from "yup";

const DIALOG_NAME = "HeightDialog";

const HeightDialog = ({ value }) => {
  useDialog(DIALOG_NAME);

  const handleAction = useDialogAction();

  return (
    <DialogForm
      name={DIALOG_NAME}
      title="Edit height"
      button="Save"
      action={handleAction}
      formik={{
        initialValues: value,
        validationSchema: Yup.object().shape({
          height: Yup.string().required("Required field"),
        }),
      }}
    >
      <Field
        fullWidth
        autoFocus
        type="number"
        name="height"
        margin="normal"
        autoComplete="off"
        component={TextField}
        placeholder="Enter height"
        label="Hero height"
      />
    </DialogForm>
  );
};

HeightDialog.dialogName = DIALOG_NAME;

export default HeightDialog;
