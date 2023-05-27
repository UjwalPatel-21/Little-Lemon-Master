import React from 'react'
import { render } from '@testing-library/react'
import BaseHeader from '../components/BaseHeader'

describe('Header component', () => {
	it('should render the correct text', () => {
		const { getByText } = render(<BaseHeader />)

		expect(getByText('Little Lemon')).toBeInTheDocument()
	})
})
