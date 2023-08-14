import { useParams } from "react-router-dom";
import usePersonData from "./usePersonData";

const usePersonProfile = () => {
  const { id } = useParams();

  const { data: person, loading } = usePersonData(id as string);

  return { person, loading };
};

export default usePersonProfile;
