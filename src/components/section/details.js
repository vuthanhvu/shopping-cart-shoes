import React, { Component } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../context";
import Colors from './colors';

import '../css/details.css';

export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: [],
        };
    }

    static contextType = DataContext;

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter((item) => {
                return item._id === this.props.match.params.id;
            });
            this.setState((state) => {
                return {
                    product: state.product.concat(data),
                };
            });
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product } = this.state;
        const {addToCart} = this.context;
        return (
            <div>
                {product.map((item) => (
                    <div className="details" key={item._id}>
                        <img src={item.src} alt="" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <Colors colors={item.color}/>
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/cart" className="cart" onCliCk={()=> addToCart(item._id)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
