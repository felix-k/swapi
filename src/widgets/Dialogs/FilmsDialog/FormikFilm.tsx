import { Checkbox, FormControlLabel } from "@mui/material";
import { useField } from "formik";
import { Film, alignArrays } from "./mock/Films";

type FilmProp = {
  name: string;
  film: Film;
};

const FormikFilm = (props: FilmProp) => {
  const { film } = props;
  const [{ name, value }, { initialValue }, { setValue }] = useField(props);

  const handleChange = (_: unknown, checked: boolean) => {
    let newValue = [...value];

    checked
      ? newValue.push(film.url)
      : newValue.splice(value.indexOf(film.url), 1);

    if (newValue.length === initialValue.length) {
      newValue = alignArrays(initialValue, newValue);
    }

    setValue(newValue);
  };

  return (
    <FormControlLabel
      label={film.title}
      control={
        <Checkbox
          name={name}
          checked={value.includes(film.url)}
          onChange={handleChange}
        />
      }
    />
  );
};

export default FormikFilm;
