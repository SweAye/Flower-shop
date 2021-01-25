
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Default from './components/Default';
import Detail from './components/Details';
import Modal from './components/Modal';

class App extends Component {
  render(){

    return (
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
        
     </>
    
    );
        
  }
}
export default App;
