import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "0px" }}>
                    <div className="container-fluid " style={{ backgroundColor: "#07e2b3" }}>
                        <div className='d-flex justify-content-between align-items-center' style={{width:'100%'}}>
                            <a className="navbar-brand px-1" href="#" >
                                Splitwise
                            </a>
                            <div className='mobile'>
                                <button class="btn btn-primary " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"  style={{ backgroundColor: "#07e2b3" }}>
                                    <i class="fas fa-align-justify"></i>
                                </button>
                            </div>
                        </div>
                        <div className='lapview'>
                            <div
                                className="collapse navbar-collapse  d-flex justify-content-end "
                                id="navbarNavDropdown"
                                style={{ marginRight: "200px" }}
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown d-flex justify-content-end">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdownMenuLink"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            User
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Option First
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Option Second
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Option Third
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
