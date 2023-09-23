import React from 'react'
import ProductoImage from '../ProductoImage/ProductoImage';
import ProductoBoton from '../ProductoBoton/ProductoBoton';
import ProductoInfo from '../ProductoInfo/ProductoInfo';
import 'ProductoCard.css';

const ProductoCard = () => {
  return (
    <div className='product-card'>

        <ProductoImage/>
        <ProductoBoton/>
        <ProductoInfo/>

    </div>
  )
}


export default ProductoCard