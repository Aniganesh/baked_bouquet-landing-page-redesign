import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import http from './http-common';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

interface IParams {
	slug: string,
	filtertype: string,
}

interface IProducts {
	name: string,
	description: string,
	internal_description: string,
	productCode: string,
	isFeatured: boolean,
	isCrossSell: boolean,
	isInStock: true,
	isPublished: boolean,
	color: string,
	blockStartDate: string,
	blockEndDate: string,
	startingPrice: number,
	pickupBlockStart: string,
	pickupBlockEnd: string,
	deliveryBlockStart: string,
	deliveryBlockEnd: string,
	sale: {
		start_date: string,
		end_date: string,
		saleType: string,
		saleValue: number,
	},
	isShippingAvailable: boolean,
	slug: string,
	created: string,
	updated: string,
	id: string,
	categoryId: string,
	occasionIds: [
		string
	],
	storeIds: [
		string
	],
	reviewIds: [
		string
	],
	_cover: {
		url: string,
		created: string,
		updated: string,
		id: string
	},
	_pictures: [
		{
			url: string,
			created: string,
			updated: string,
			id: string
		}
	],
	flavorIds: [
		string
	]
}

const useStyles = makeStyles({
	productCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '325px',
		margin: '2rem'
	},
	displayArea: {
		display: 'flex',
		width: '100vw',
		flexWrap: 'wrap',
		margin: 0,
		padding: 0,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	productImg: {
		width: '200px',
	}
})


const Products: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
	const classes = useStyles();
	const [products, setProducts] = React.useState<IProducts[]>([]);
	let idToUse = "";
	if ((props.match.params as IParams).filtertype === "occasions") {
		idToUse = "occasionIds";
	} else if ((props.match.params as IParams).filtertype === "categories") {
		idToUse = "categoryId";
	}

	React.useEffect(() => {
		http.get(`${(props.match.params as IParams).filtertype}?filter={"where":{"slug":"${(props.match.params as IParams).slug}"}}`).then((res) => {
			http.get(`products?filter={"where":{"${idToUse}":"${res.data[0].id}"}}`).then((res) => {
				setProducts(res.data)
			}).catch(err => console.error(err))
		});
	}, [idToUse, props.match.params]);
	const getProductSet = () => {
		return new Set([...products]);
	}
	return (
		<div className={classes.displayArea}>
			{
				[...getProductSet()].map(product => (
					<Card key={product.id} className={classes.productCard}>
						<div>
							<img className={classes.productImg} src={product._cover.url} alt={product.name} />
						</div>
						<CardHeader title={product.name} />
						<CardContent>
							<div dangerouslySetInnerHTML={{ __html: product.description }}></div>
						</CardContent>
					</Card>
				))
			}
		</div >
	);
}

export default Products;