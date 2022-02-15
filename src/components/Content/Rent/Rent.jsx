import s from './Rent.module.css'
import '../../../Redux/state'
import Item from '../../Item/Item'
import { Route } from 'react-router';
const Rent = (props) => {
    document.getElementById("title").innerHTML='Прокат';
    let htmlcategories=props.Rent.categories.map(cat => {return (<Item to={'/rent/categorie' + cat.catid} name={cat.catname} img={cat.catimg} descr={cat.catdescr} />) })
    let htmlproducts=props.Rent.products.map(product => {return (<Item to={'/rent/categorie0/product' + product.prodid} name={product.prodname} img={product.prodimg} descr={product.proddescr} />) })
    return (
        <div className={s.Rent}>
            <Route exact path='/rent/' render={()=>{return(htmlcategories)}}/>
            <Route path='/rent/categorie0' render={()=>{return(htmlproducts)}}/>
        </div>
    )
}

export default Rent