import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ isLoading }) => {
  return (
    <ClipLoader
      color="purple"
      loading={isLoading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
