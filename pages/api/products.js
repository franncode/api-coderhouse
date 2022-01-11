// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	const products = [
		{
			id: 1,
			title: 'Macbook Pro 13',
			price: 1200,
			description: 'Ultimo modelo de macbook pro',
			pictureUrl:
				'https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp',
		},
		{
			id: 2,
			title: 'Macbook Pro 15',
			price: 1500,
			description: 'Ultimo modelo de macbook pro',
			pictureUrl:
				'https://noticierouniversal.com/wp-content/uploads/2019/11/450_1000-64.jpg',
		},
		{
			id: 3,
			title: 'iPhone 13',
			price: 1000,
			description: 'Ultimo modelo de iphone',
			pictureUrl: 'https://i.blogs.es/4c5b2b/ipihone-13-pro-00/1366_2000.jpeg',
		},
	]

	res.status(200).json(products)
}
