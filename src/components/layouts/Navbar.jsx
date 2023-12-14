import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container">
          <Link className="navbar-brand text-white">CounterApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counter" className="nav-link text-white" aria-current="page">Counter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reuseCounter" className="nav-link text-white" aria-current="page">ReuseCounter</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
