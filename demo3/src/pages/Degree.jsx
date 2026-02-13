import BootstrapSection from "../components/BootstrapSection";
import MuiSection from "../components/MuiSection";

function Degree() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <BootstrapSection page="degree" />
        </div>
        <div className="col-md-6">
          <MuiSection page="degree" />
        </div>
      </div>
    </div>
  );
}

export default Degree;
