import React from 'react'

const Menu = () => {
	const menuItems = [
		{ name: 'Pasta', description: 'Spaghetti with meatballs', price: 12.99 },
		{ name: 'Salad', description: 'Mixed greens with vinaigrette dressing', price: 8.99 },
		{ name: 'Pizza', description: 'Margherita pizza with fresh mozzarella', price: 14.99 },
		{ name: 'Burger', description: 'Juicy beef patty with lettuce, tomato, and onion', price: 10.99 }
	]

	return (
		<div className='container mx-auto my-8'>
			<h2 className='text-2xl font-bold mb-4'>Our Menu</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{menuItems.map((item, index) => (
					<div key={index} role='listitem' className='bg-white rounded-lg shadow-md p-4'>
						<h3 className='text-lg font-bold mb-2'>{item.name}</h3>
						<p className='text-gray-700 mb-2'>{item.description}</p>
						<p className='font-bold'>${item.price.toFixed(2)}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Menu
