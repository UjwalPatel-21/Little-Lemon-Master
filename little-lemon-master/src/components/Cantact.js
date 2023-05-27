import { useState } from 'react'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const [errors, setErrors] = useState({})

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		let errors = {}
		if (!formData.name) {
			errors.name = 'Name is required'
		}
		if (!formData.email) {
			errors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email is invalid'
		}
		if (!formData.message) {
			errors.message = 'Message is required'
		}
		setErrors(errors)
		if (Object.keys(errors).length === 0) {
			console.log(formData)
		}
	}

	return (
		<section className='bg-gradient-to-r from-yellow-500 to-yellow-400 py-16'>
			<div className='container mx-auto'>
				<h2 className='text-3xl font-bold text-white mb-8'>Contact Us</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-6'>
						<label htmlFor='name' className='block text-white font-bold mb-2'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className={`w-full px-4 py-3 rounded-md bg-white text-gray-700 ${errors.name ? 'border-red-500' : ''}`}
						/>
						{errors.name && <p className='text-red-500 mt-2'>{errors.name}</p>}
					</div>
					<div className='mb-6'>
						<label htmlFor='email' className='block text-white font-bold mb-2'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className={`w-full px-4 py-3 rounded-md bg-white text-gray-700 ${errors.email ? 'border-red-500' : ''}`}
						/>
						{errors.email && <p className='text-red-500 mt-2'>{errors.email}</p>}
					</div>
					<div className='mb-6'>
						<label htmlFor='message' className='block text-white font-bold mb-2'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							rows='4'
							value={formData.message}
							onChange={handleChange}
							className={`w-full px-4 py-3 rounded-md bg-white text-gray-700 ${errors.message ? 'border-red-500' : ''}`}></textarea>
						{errors.message && <p className='text-red-500 mt-2'>{errors.message}</p>}
					</div>
					<button type='submit' className='bg-white text-primary font-bold px-6 py-3 rounded-md hover:bg-gray-200'>
						Submit
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
