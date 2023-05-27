import { render, screen } from '@testing-library/react'
import Menu from '../components/Menus'

describe('Menu component', () => {
	test('renders menu items', () => {
		const menuItems = [
			{ name: 'Pasta', description: 'Spaghetti with meatballs', price: 12.99 },
			{ name: 'Salad', description: 'Mixed greens with vinaigrette dressing', price: 8.99 },
			{ name: 'Pizza', description: 'Margherita pizza with fresh mozzarella', price: 14.99 },
			{ name: 'Burger', description: 'Juicy beef patty with lettuce, tomato, and onion', price: 10.99 }
		]

		render(<Menu />)

		const menuItemsElements = screen.getAllByRole('listitem')
		expect(menuItemsElements).toHaveLength(menuItems.length)

		menuItems.forEach((menuItem, index) => {
			const nameElement = screen.getByText(menuItem.name)
			expect(nameElement).toBeInTheDocument()

			const priceElement = screen.getByText(`$${menuItem.price.toFixed(2)}`)
			expect(priceElement).toBeInTheDocument()

			const descriptionElement = screen.getByText(menuItem.description)
			expect(descriptionElement).toBeInTheDocument()
		})
	})
})
