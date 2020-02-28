import React from 'react';
import Header from './components/Header';
import ListadoProductos from './components/ListadoProductos';

function App() {
	return (
		<React.Fragment>
			{/* Header */}
			<Header />
			
			{/* Banner */}
			<div className="banner"></div>
			
			{/* Listado de productos */}
			<ListadoProductos titulo="Basado en tu última visita" categoria="visited" />
			<ListadoProductos titulo="Ofertas" categoria="in-sale" />
		</React.Fragment>
	);
}

export default App;