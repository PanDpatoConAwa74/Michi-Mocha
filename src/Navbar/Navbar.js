import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <img className="img-profile" src="https://i.pinimg.com/236x/75/ce/ba/75ceba6ebc1d0d412249d644945616da.jpg" width={50} height={50}/> 
                <Link className="navbar-brand" to="/home">
                    <h1>Michi Mocha</h1>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teamaker">
                                TeaMaker
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Tools
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/store">Store</Link></li>
                                <li><Link className="dropdown-item" to="/catmunity">Catmunity</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/catbag">CatBag</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Looking for something?"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
