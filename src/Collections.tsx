import React, { useState, useEffect } from 'react';
import http from '../http-common';
import { Card, CardHeader, CardActions, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
		fetch('https://bb-api.mithyalabs.com/api/categories').then(res => res.json()).then((res) => { console.log(res); setCollections([...res]); }).catch(console.log);
	}, []);
	return (
		<React.Fragment>
			{
				collections.map(collection => (
					<Card key={collection.name} className={classes.collectionCard}>
						{/* <CardMedia image={collection._cover.url} src={collection._cover.url} title={collection.name} /> */}
						<div className={classes.collectionCardImgWrapper}>
							<img className={classes.collectionCardImg} src={collection._cover.url} alt={collection.name} />
						</div>
						<CardHeader className={classes.collectionName} title={collection.name} />
						{/* <CardContent>
							<Typography className={classes.collectionCardContent} variant="body2">{collection.description}</Typography>
						</CardContent> */}
						<CardActions className={classes.collectionCardActions}><Link><Button variant="outlined" color="secondary"> Starting at ${collection.startingPrice}</Button></Link></CardActions>
					</Card>
				))
			}
		</React.Fragment>


	);
}

export default Collections;