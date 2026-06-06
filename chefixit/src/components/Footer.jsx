import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="cheFixit logo" />
          <span>cheFixit</span>
        </div>

        <p>
          Turn ingredients into recipes instantly with AI assistance.
        </p>

        <div className="footer-line" />

        <div className="laster-footer">
          <p className="footer-credit">
            Built by{" "}
            <a
              href="https://github.com/m-abdullah-akram"
              target="_blank"
              rel="noreferrer"
            >
              M Abdullah Akram
            </a>
          </p>

          <small className="footer-copy">
            © {new Date().getFullYear()} cheFixit. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}