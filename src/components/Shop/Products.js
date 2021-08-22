import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
	{
		id: "0001",
		title: "Item1",
		price: 5.49,
		description: "This is the first item's description.",
	},
	{
		id: "0002",
		title: "Product2",
		price: 8.99,
		description: "Another description, for the second product.",
	},
	{
		id: "0003",
		title: "Third Item",
		price: 1.99,
		description: "Another description, for the third product.",
	},
];

const Products = (props) => {
	const productItemsList = (
		<ul>
			{PRODUCTS.map((product, index) => {
				return <ProductItem key={index} details={product} />;
			})}
		</ul>
	);

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			{productItemsList}
		</section>
	);
};

export default Products;
