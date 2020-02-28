import React from 'react';
import Producto from './Producto';

import db from '../data/productsDataBase';

function ListadoProductos(props) {
	let productos = db.filter(oneProduct => oneProduct.category === props.categoria);
	return (
		<div className="container products-wrapper">
			<div className="row">
				<div className="col-12">
					<h2 className="products-title">{props.titulo}</h2>
				</div>
				{/* Componente Producto */}
				{
					productos.map(unProducto => <Producto infoProducto={unProducto} />)
				}
			</div>
		</div>
	)
}

export default ListadoProductos;