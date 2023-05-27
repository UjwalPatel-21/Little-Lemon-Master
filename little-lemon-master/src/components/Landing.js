import React from 'react'

const Landing = () => {
	return (
		<div className='bg-yellow-500 flex items-center justify-center h-96'>
			<div className='max-w-md text-center'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>Welcome to Little Lemon</h1>
				<p className='text-lg text-gray-900 mb-8'>We serve the best lemon-inspired dishes in town.</p>
				<a
					href='#booking-form'
					className='bg-white text-yellow-500 rounded-lg py-2 px-4 font-bold shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
					Book a Table
				</a>
			</div>
		</div>
	)
}

export default Landing
