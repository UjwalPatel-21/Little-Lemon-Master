import React from 'react'

const Reviews = () => {
	const reviews = [
		{
			name: 'John Doe',
			rating: 4,
			review: 'The food was amazing, and the service was excellent. I would definitely recommend this restaurant to anyone looking for a great meal.'
		},
		{
			name: 'Jane Smith',
			rating: 5,
			review: 'The atmosphere was fantastic, and the food was delicious. I loved every minute of my experience at Little Lemon!'
		},
		{
			name: 'Bob Johnson',
			rating: 3,
			review: 'The food was good, but the service was a bit slow. Overall, it was an enjoyable experience.'
		}
	]

	return (
		<div className='container mx-auto my-8 bg-white p-8'>
			<h2 className='text-2xl font-bold mb-4'>Customer Reviews</h2>
			{reviews.map((review, index) => (
				<div key={index} className='border-b pb-4 mb-4'>
					<div className='flex items-center mb-2'>
						<span className='font-bold mr-2'>{review.name}</span>
						<div className='flex items-center'>
							{[...Array(review.rating)].map((_, index) => (
								<svg key={index} className='h-4 w-4 fill-current text-yellow-500 mr-1' viewBox='0 0 20 20'>
									<path d='M10 1L12.88 7.69H19.78L14.47 11.79L16.35 18.47L10 14.19L3.65 18.47L5.53 11.79L0.22 7.69H7.12L10 1Z' />
								</svg>
							))}
						</div>
					</div>
					<p>{review.review}</p>
				</div>
			))}
		</div>
	)
}

export default Reviews
