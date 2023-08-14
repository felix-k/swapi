import { FormGroup } from "@mui/material";
import FormikFilm from "./FormikFilm";
import Films from "./mock/Films";

const FormikFilms = ({ name }) => {
  return (
    <FormGroup sx={{ pt: 2 }}>
      {Films.map((film, index) => (
        <FormikFilm key={index} name={name} film={film} />
      ))}
    </FormGroup>
  );
};

export default FormikFilms;
