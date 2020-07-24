import React from 'react';
import http from './http-common';
import { Card, CardHeader, Modal, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IStores {
	name: string,
	contact: string,
	email: string,
	address1: string,
	address2: string,
	zipcode: string,
	state: string,
	city: string,
	location: {
		lat: number,
		lng: number
	},
	tax: 0,
	auth_net_settings: {
		api_key: string,
		transaction_key: string
	},
	hana_pos_settings: {
		username: string,
		password: string,
		storeMatch: string
	},
	store_hours: {
		mon_fri: string,
		sat: string,
		sun: string,
		special: string
	},
	isShipping: boolean,
	created: string,
	updated: string,
	id: string,
	managerId: string,
	userId: string,
	_cover: {
		url: string,
		created: string,
		updated: string,
		id: string
	},
	cardOpen: boolean
}

const useStyles = makeStyles({
	cardImg: {
		width: '100px',
		height: '100px',
		border: '1px solid black',
	},
	locations: {
		display: 'flex',
		width: '100vw',
		alignItems: 'center',
		justifyContent: 'center',
	},
	locationCard: {
		margin: '2rem',
	},
	modal: {
		maxWidth: '75vw',
		display: 'flex',
		justifyContent: 'center',
		maxHeight: '50vh',
	},
	modalCard: {
		display: 'flex',
		justifyContent: 'center',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	storeDetails: {
		margin: '1rem',
	},
})

const Stores: React.FC = () => {
	const [stores, setStores] = React.useState<IStores[]>([]);
	React.useEffect(() => {
		http.get("stores").then(res => { console.log(res.data);[...res.data].map(data => { data.cardOpen = false; return data }); setStores(res.data); }).catch(err => console.log(err));

	}, [])
	const classes = useStyles();

	function openModal(index: number) {
		const copy = [...stores];
		copy[index].cardOpen = true;
		setStores(copy);
	}
	function handleCardKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === 'Escape') {
			const storeCopy = [...stores];
			storeCopy.map(store => { store.cardOpen = false; return store });
			setStores(storeCopy);
		}
	}


	return (
		<div className={classes.locations}>
			{
				[...stores].map((store, index) => {
					const modalRef = React.createRef<typeof Modal>();
					return (
						<div key={store.id}>
							<Modal aria-labelledby={store.id} className={classes.modal} open={store.cardOpen} ref={modalRef} onKeyDown={(event) => handleCardKeyPress(event)}>
								<Card className={classes.modalCard}>
									<div>
										<img src={store._cover.url} style={{ maxWidth: '40vw', border: '1px solid black' }} alt={store.name} />
									</div>
									<CardContent className={classes.cardContent}>
										<CardHeader className={classes.storeDetails} id={store.id} title={store.name} />
										<div className={classes.storeDetails}>
											<Typography variant="h6" component="h5">ADDRESS</Typography>
											{store.address1}<br />
										</div>
										<div className={classes.storeDetails}>
											<Typography variant="h6" component="h5">CONTACT</Typography>
											<a href={"tel:" + store.contact}>{store.contact}</a>
										</div>
										<div className={classes.storeDetails}>
											<Typography variant="h6" component="h5">EMAIL</Typography>
											<a href={"mailto:" + store.email}>{store.email}</a>
										</div>
										<div className={classes.storeDetails}>
											<Typography variant="h6" component="h5">HOURS</Typography>
											Monday-Friday: {store.store_hours.mon_fri}<br />
											Saturday: {store.store_hours.sat}<br />
											Sunday: {store.store_hours.sun}<br />
										</div>
									</CardContent>
								</Card>
							</Modal>
							<Card onClick={() => openModal(index)} className={classes.locationCard}>
								<div> <img className={classes.cardImg} src={store._cover.url} alt={store.name} /></div>
								<CardHeader title={<Typography variant="h6">{store.name}</Typography>} />
							</Card>
						</div>
					)
				})
			}
		</div>
	)
}

export default Stores;