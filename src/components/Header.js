import React from 'react';

function Header () {
	return (
		<header className="main-header">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-5 col-md-2">
						<a href="/" className="main-header_home-link">
							<img src="/images/logo-mercado-liebre.svg" alt="logo Mercado Liebre" />
						</a>
					</div>

					<div className="col-7 col-md-6">
						<form action="" method="get" className="search-form">
							<input type="text" name="search" placeholder="Buscar productos, marcas y más" className="search-form_input" />
								<button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
						</form>
					</div>

					<div className="col-12 col-md-4">
						<a href="/" className="main-header_credit-link">
							<i className="fas fa-hand-holding-usd"></i>
							Comprá en cuotas y sin tarjeta de crédito
						</a>
					</div>
				</div>

				<button className="btn-toggle-navbar">
					<i className="fas fa-bars"></i>
				</button>

				<nav className="main-navbar">
					<ul className="left-navbar">
						<li><a href="/">Ofertas</a></li>
						<li><a href="/">Tiendas Oficiales</a></li>
						<li><a href="/">Vender</a></li>
						<li><a href="/">Ayuda</a></li>
					</ul>

					<ul className="right-navbar">
						<li><a href="/">Creá tu cuenta <i className="far fa-address-card"></i></a></li>
						<li><a href="/">Ingresá <i className="fas fa-sign-in-alt"></i></a></li>
						<li><a href="/">Mis compras <i className="fas fa-shopping-basket"></i></a></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
			
export default Header;