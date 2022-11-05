import s from './Rent.module.scss'
import Item from '../Common/Item/Item'
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
const mapStateToProps = state => ({
    categories: state.Rent.categories,
    products: state.Rent.products
})

const Rent = (props) => {
    let categories = props.categories.map(cat => <Item key={cat.catid} to={'/rent/categorie' + cat.catid}
                                                       name={cat.catname}
                                                       img={cat.catimg} descr={cat.catdescr}/>)
    let products = props.products.map(product => <Item key={product.prodid}
                                                       to={'/rent/categorie0/product' + product.prodid}
                                                       name={product.prodname} img={product.prodimg}
                                                       descr={product.proddescr}/>)
    return (
        <div className={"itemsBlock"}>
                <Route exact path='/rent/' render={() => categories}/>
                <Route path='/rent/categorie0' render={() => products}/>
        </div>
    )
}

export default connect(mapStateToProps)(Rent)