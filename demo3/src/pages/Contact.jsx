import BootstrapSection from "../components/BootstrapSection";
import MuiSection from "../components/MuiSection";

function Contact() {
  return (
    <div className="container-fluid mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <BootstrapSection page="contact" />
        </div>
        <div className="col-md-6">
          <MuiSection page="contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
