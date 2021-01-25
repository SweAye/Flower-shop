import React, { Component } from 'react'
import Title from './Title';
import Product from './Product';
import {ProductConsumer} from '../context';


export default class  extends Component {
    
    render() {
        
        return (
            <>
            <div className="py-5">
                <div className="container">
                    <Title name="Bouquets" title="In Stock"></Title>

                    <div className= "row">
                        <ProductConsumer>
                            {value=>{
                                return value.products.map(product=>{
                                    return <Product key={product.id} product={product}/>;
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
