import React from "react";

const Navbar = () => {
    return (    <nav class="navbar navbar-expand-lg bg-dark bg-opacity-75">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
                        <div class="flex-row-reverse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light text-opacity-75" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light text-opacity-75" aria-current="page" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light text-opacity-75" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>);
}

export default Navbar;