import PacmanLoader from "react-spinners/PacmanLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <PacmanLoader
      color="#b355cc"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
