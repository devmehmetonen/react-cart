import React, { Component } from 'react';
import formatCurrency from '../util'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(p=>(
                       <li key={p._id}>
                           <div className="product">
                                <a href={"#" + p._id}>
                                  <img src={p.image} alt={p.title}></img>
                                  <p>
                                      {p.title}
                                  </p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {formatCurrency(p.price)}
                                    </div>
                                    <button className="button primary">
                                        Add To Cart
                                    </button>
                                </div>
                           </div>
                       </li>
                    ))}
                </ul>
            </div>
        )
    }
}
