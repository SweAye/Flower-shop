import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Products extends Component {
    render() {
        return (
            
               
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        console.log("cart value is : ????");

                        if ((cart.length) > 0){
                            return (
                                    
                                    <>
                                    < Title name="My" title="shopping cart"/>
                                    <CartColumns/>
                                    <CartList value = {value}/>
                                    <CartTotals value= {value} history ={this.props.history}/>
                                    </>
                                    
                                     
                                   )
                        }
                        else{
                            return (<EmptyCart/>)
                        }
                        
                    }}
                </ProductConsumer>
                
            </section>
        )
    }
}
