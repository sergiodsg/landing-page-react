import React from "react";

const Navbar = () => {
    return (    <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                        <div className="flex-row-reverse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light text-opacity-75" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light text-opacity-75" aria-current="page" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light text-opacity-75" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>);
}

export default Navbar;