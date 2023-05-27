import React from 'react'
import { render } from '@testing-library/react'
import Landing from '../components/Landing'

describe('Landing component', () => {
	it('should render the correct heading and paragraph text', () => {
		const headingText = 'Welcome to Little Lemon'
		const paragraphText = 'We serve the best lemon-inspired dishes in town.'
		const { getByRole, getByText } = render(<Landing />)

		const headingElement = getByRole('heading', { name: headingText })
		const paragraphElement = getByText(paragraphText)

		expect(headingElement).toBeInTheDocument()
		expect(paragraphElement).toBeInTheDocument()
	})
})
