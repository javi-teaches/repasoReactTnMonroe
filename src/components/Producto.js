import React from 'react';

function Producto(props) {
	let { infoProducto: item } = props;
	return (
		<div className="col-12 col-sm-6 col-lg-3">
			<section className="product-box">
				<a href="/">
					<figure className="product-box_image">
						<img src={ `/images/products/${item.image}` } alt="imagen de producto" />
					</figure>
					<article className="product-box_data">
						<h2>${ item.price }</h2>
						<span> { item.discount ? `${item.discount}% OFF` : null } </span>
						<p> { item.name } </p>
						<i className="fas fa-truck"></i>
					</article>
				</a>
			</section>
		</div>
	)
}

export default Producto;