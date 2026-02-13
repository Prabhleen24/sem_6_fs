function BootstrapSection({ page }) {
  return (
    <div className="content-card">
      <h3 className="section-title">Bootstrap Section</h3>

      {page === "home" && (
        <p>
          Responsive homepage layout created using Bootstrap components.
        </p>
      )}

      {page === "about" && (
        <p>
          I am a Computer Science undergraduate interested in full stack
          development and UI engineering.
        </p>
      )}

      {page === "degree" && (
        <>
          <p>B.Tech in Computer Science Engineering</p>
          <p className="text-muted">Specialization: AI & ML</p>
          <span className="badge bg-success">Undergraduate</span>
        </>
      )}

      {page === "skills" && (
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Basic Node.js</li>
        </ul>
      )}

      {page === "contact" && (
        <>
          <p>Email: student@cuchd.in</p>
          <p>Phone: +91 XXXXXXXX</p>
        </>
      )}
    </div>
  );
}

export default BootstrapSection;
