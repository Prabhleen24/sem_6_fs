import BootstrapSection from "../components/BootstrapSection";
import MuiSection from "../components/MuiSection";

function Skills() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <BootstrapSection page="skills" />
        </div>
        <div className="col-md-6">
          <MuiSection page="skills" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
