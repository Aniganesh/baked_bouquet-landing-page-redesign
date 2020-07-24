import React from 'react';
import Collections from './Collections';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Locations from './Location';



const useStyles = makeStyles({
	landingArea: {
		background: `url(${require('./vase-of-flowers.jpg')})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'center',
		minWidth: '100vw',
		minHeight: '90vh',
	},
	cta: {
		marginLeft: '10vw',
	},

});


const HomePage: React.FC<{}> = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.landingArea}>
				<Button variant='outlined' size='large' className={classes.cta} color='secondary'>Buy a baked Bouquet</Button>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0, justifyContent: 'center', textAlign: 'center', width: '100vw', height: '100%' }}>
				<Typography variant="h4" component='h2'>Collections</Typography>
				<Collections />
			</div>
			<Locations />
		</div>
	)
}
export default HomePage;