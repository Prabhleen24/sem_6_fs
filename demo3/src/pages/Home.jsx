import BootstrapSection from "../components/BootstrapSection";
import MuiSection from "../components/MuiSection";

function Home() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <BootstrapSection page="home" />
        </div>
        <div className="col-md-6">
          <MuiSection page="home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
