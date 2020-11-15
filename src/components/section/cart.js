import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context";

import Colors from "./colors";

import "../css/details.css";
import "../css/cart.css";

export default class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { carts, reduction, increase, removeProduct, total } = this.context;
        if (carts.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
        } else {
            return (
                <>
                    {carts.map((item) => (
                        <div className="details cart" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <Colors colors={item.color} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button
                                        className="count"
                                        onClick={() => reduction(item._id)}
                                    >
                                        {" "}
                                        -{" "}
                                    </button>
                                    <span>{item.count}</span>
                                    <button
                                        className="count"
                                        onClick={() => increase(item._id)}
                                    >
                                        {" "}
                                        +{" "}
                                    </button>
                                </div>
                                <div
                                    className="delete"
                                    onClick={() => removeProduct(item._id)}
                                >X
                            </div>
                            </div>
                        </div>
                    ))}
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                         <h2>Total: ${total}</h2>
                    </div>
                </>
            );
        }
    }
}
