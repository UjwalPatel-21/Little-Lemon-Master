import React from 'react'

function Header() {
	return (
		<nav className='bg-yellow-400 shadow-lg'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex justify-between'>
					<div className='flex space-x-4'>
						<div>
							<a href='/' className='flex items-center py-4 px-2'>
								<img className='h-8 w-auto sm:h-10' src='/logo.png' alt='Little Lemon logo' />
								<span className='font-bold text-black ml-2 text-xl'>Little Lemon</span>
							</a>
						</div>
					</div>
					<div className='hidden md:flex items-center space-x-1'>
						<a href='/menu' className='py-4 px-2 text-gray-700 font-semibold hover:text-gray-900'>
							Menu
						</a>
						<a href='/about' className='py-4 px-2 text-gray-700 font-semibold hover:text-gray-900'>
							About
						</a>
						<a href='/contact' className='py-4 px-2 text-gray-700 font-semibold hover:text-gray-900'>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
