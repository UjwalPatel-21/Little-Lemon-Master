import React from 'react'

const Specials = () => {
	const specials = [
		{
			name: 'Lemon Pepper Shrimp',
			description: 'Sautéed shrimp in a lemon and pepper sauce served with rice and mixed veggies.',
			price: 18.99
		},
		{
			name: 'Lemon and Herb Roasted Chicken',
			description: 'Half roasted chicken marinated in lemon and herbs, served with garlic mashed potatoes and green beans.',
			price: 15.99
		},
		{
			name: 'Lemon and Ginger Tofu Stir Fry',
			description: 'Sautéed tofu and veggies in a tangy lemon and ginger sauce served with rice.',
			price: 12.99
		}
	]

	return (
		<section className='bg-gray-100 py-16'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8'>Today's Specials</h2>
				<div className='flex flex-wrap -mx-4'>
					{specials.map(special => (
						<div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8' key={special.name}>
							<div className='bg-white rounded-lg p-6'>
								<h3 className='text-xl font-bold mb-2'>{special.name}</h3>
								<p className='text-gray-600 mb-4'>{special.description}</p>
								<p className='text-gray-800 font-bold'>{`$${special.price}`}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Specials
