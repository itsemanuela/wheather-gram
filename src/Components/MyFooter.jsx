const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-minimal">
      <div className="container-fluid px-5">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="footer-links d-flex gap-4">
            <a href="#support" className="minimal-link">
              Supporto
            </a>
            <a href="#privacy" className="minimal-link">
              Privacy
            </a>
            <a href="mailto:contact@meteomood.com" className="minimal-link">
              Contatti
            </a>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <div className="social-icons d-flex gap-3">
              <i className="bi bi-instagram minimal-icon"></i>
              <i className="bi bi-twitter-x minimal-icon"></i>
              <i className="bi bi-spotify minimal-icon"></i>
            </div>

            <div className="vertical-divider mx-2"></div>

            <span className="small-brand">© {currentYear} Emanuela-Gram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
