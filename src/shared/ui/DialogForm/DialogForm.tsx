import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog as MuiDialog,
} from "@mui/material";

import { Formik, Form } from "formik";
import useDialogForm from "./useDialogForm";

const DialogForm = ({ name, title, button, children, formik, action }) => {
  const { open, close, fullWidth, fullScreen } = useDialogForm(name);

  const handleSubmit = (value: object) => {
    action && action(value);
    handleClose();
  };

  const handleClose = () => {
    close && close();
  };

  if (!open) return null;

  return (
    <MuiDialog
      open={open}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      onClose={handleClose}
    >
      <Formik
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
      >
        {(props) => {
          const { dirty, isSubmitting, submitForm, handleSubmit } = props;

          return (
            <>
              <DialogTitle
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                }}
              >
                {title}
              </DialogTitle>

              <DialogContent>
                <Form
                  onSubmit={dirty ? handleSubmit : (e) => e.preventDefault()}
                  noValidate
                >
                  {children}
                </Form>
              </DialogContent>

              <DialogActions>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  onClick={handleClose}
                >
                  {"Cancel"}
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting || !dirty}
                  onClick={submitForm}
                >
                  {button || "OK"}
                </Button>
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </MuiDialog>
  );
};

export default DialogForm;
