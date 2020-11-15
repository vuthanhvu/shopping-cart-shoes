import React, { Component } from "react";
import { Link } from "react-router-dom";

import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";

import "./css/header.css";
import { DataContext } from "./context";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false,
        };
    }

    static contextType = DataContext;

    menuToggle = () => {
        this.setState((state) => {
            return {
                toggle: !this.state.toggle,
            };
        });
    };

    render() {
        const { toggle } = this.state;

        return (
            <div>
                <header>
                    <div className="menu">
                        <img
                            src={Menu}
                            alt=""
                            width="20"
                            onClick={this.menuToggle}
                        />
                    </div>
                    <div className="logo">
                        <h2>Nike</h2>
                    </div>
                    <nav>
                        <ul className={toggle ? "toggle" : ""}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Products</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/login">Login / Register</Link>
                            </li>
                            <li className="close">
                                <img
                                    src={Close}
                                    alt=""
                                    width="20"
                                    onClick={this.menuToggle}
                                />
                            </li>
                        </ul>
                        <div className="nav-cart">
                            <span>{this.context.carts.length}</span>
                            <Link to="/cart">
                                <img src={CartIcon} alt="" width="20" />
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
