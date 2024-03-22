export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-lg">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <h3>
              <i className="bi bi-tencent-qq m-1 text-light"></i>
            </h3>
            <div className="d-none d-md-block m-1 text-light">
              Career Portal
            </div>
          </div>
        </a>
        <div className="flex-fill d-flex justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link text-light">
                Admin Panel
              </a>
            </li>
          </ul>

          <div>
            <button className="btn btn-outline-light">
              <i className="bi bi-box-arrow-in-right text-light me-1"></i>
              Logout
            </button>
            <a href="/login" className="btn btn-outline-light">
              <i className="bi bi-box-arrow-in-right text-light me-1"></i>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
