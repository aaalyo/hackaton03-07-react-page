import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Views/HomePage';
import CartProducts from './Views/CartProducts';
import CartAddress from './Views/CartAddress';
import CategoriesPage from './Views/Categories';
import CategoryPage from './Views/Category';
import Product from './Views/Product';
import CartSummary from './Views/CartSummary';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
           <HomePage/>
          </Route>
          <Route exact path="/CartProducts">
           <CartProducts/>
          </Route>
          <Route path="/CartAddress">
           <CartAddress/>
          </Route>
          <Route exact path="/Categories">
           <CategoriesPage/>
          </Route>
          <Route exact path="/Category">
           <CategoryPage/>
          </Route>
          <Route exact path="/Product">
           <Product/>
          </Route>
        </Switch>
        <Route exact path="/CartSummary">
           <CartSummary/>
          </Route>
        <Footer/>        
      </Router>
    </div>
  );
}

export default App;
