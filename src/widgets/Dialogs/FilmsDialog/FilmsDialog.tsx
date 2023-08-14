import { DialogForm } from "@/shared/ui";
import useDialogAction from "../useDialogAction";
import useDialog from "../useDialog";
import FormikFilms from "./FormikFilms";
import * as Yup from "yup";

const DIALOG_NAME = "FilmsDialog";

const FilmsDialog = ({ value }) => {
  useDialog(DIALOG_NAME);

  const handleAction = useDialogAction();

  return (
    <DialogForm
      name={DIALOG_NAME}
      title="Edit films"
      button="Save"
      action={handleAction}
      formik={{
        initialValues: value,
        validationSchema: Yup.object().shape({
          films: Yup.array().required("Specify at least one film"),
        }),
      }}
    >
      <FormikFilms name="films" />
    </DialogForm>
  );
};

FilmsDialog.dialogName = DIALOG_NAME;

export default FilmsDialog;
