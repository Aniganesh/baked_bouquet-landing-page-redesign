import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardActions, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getAllCollections  from './CollectionsServiceWorkers';


interface ICover {
	url: string,
	created: string,
	updated: string,
	id: string,
	imagePath: string,
	size: number,
	height: number,
	width: number,
	fileFolder: string,
	thumbnail: string,
	name: string,
	transformation: string,
	imkId: string
}

interface ICollections {
	name: string,
	description: string,
	showInMenu: boolean,
	startingPrice: number,
	slug: string,
	created: string,
	updated: string,
	id: string,
	_cover: ICover;
}

const useStyles = makeStyles({
	collectionsArea: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		width: '100vw',
	},
	collectionCard: {
		margin: '2rem',
		width: '300px',
		display: 'flex',
		flexDirection: 'column',
	},
	collectionCardImgWrapper: {
		display: 'flex',
		justifyContent: 'center',
	},
	collectionCardImg: {
		height: '250px',
	},
	collectionCardContent: {
		height: '100px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	collectionCardActions: {
		display: 'flex',
		justifyContent: 'center',
	},
	collectionName: {
		alignSelf: 'center',
	}
})

const Collections: React.FC<{}> = () => {
	const classes = useStyles();
	const [collections, setCollections] = useState<ICollections[]>([]);
	useEffect(() => {
		getAllCollections().then(res => setCollections(res.data)).catch(err => console.log(err));
	}, []);
	return (
		<div className={classes.collectionsArea}>
			{
				collections.map(collection => (
					<Card key={collection.name} className={classes.collectionCard}>
						<div className={classes.collectionCardImgWrapper}>
							<img className={classes.collectionCardImg} src={collection._cover.url} alt={collection.name} />
						</div>
						<CardHeader className={classes.collectionName} title={collection.name} />
						<CardActions className={classes.collectionCardActions}><Link><Button variant="outlined" color="secondary"> Starting at ${collection.startingPrice}</Button></Link></CardActions>
					</Card>
				))
			}
		</div>


	);
}

export default Collections;