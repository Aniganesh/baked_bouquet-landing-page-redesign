import React, { useState, useEffect } from 'react';
import getAllOccasions from './OccasionServiceWorker';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem, Button, ClickAwayListener, Typography, Popper, Grow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


interface IOccasion {
	name: string,
	isSpecial: boolean,
	start_date: string,
	end_date: string,
	showInMenu: boolean,
	description: string,
	slug: string,
	created: string,
	updated: string,
	id: string
}

const useStyles = makeStyles({
	navoption: {
		color: 'white',
		textDecoration: 'none',
	},
	menu: {
		background: 'lightcoral',
		color: 'white',
	}
})

const ShopOccasion: React.FC<{}> = () => {
	const classes = useStyles();
	const anchorRef = React.useRef<HTMLButtonElement>(null);
	const [occasions, setOccasions] = useState<IOccasion[]>([]);
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	function toggleMenu() {
		setMenuIsOpen(!menuIsOpen);
	}


	useEffect(() => {
		getAllOccasions().then((res) => setOccasions(res.data)).catch((err) => console.log(err));
	}, []);

	function closeMenu(event: React.MouseEvent<EventTarget> | null) {
		if (event !== null) {
			if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
				return;
			}
		}


		setMenuIsOpen(false);
	}

	return (
		<React.Fragment>
			<Typography variant="h6"><Button onClick={() => toggleMenu()} ref={anchorRef} className={classes.navoption}>Shop Occasion</Button></Typography>
			<Popper open={menuIsOpen} anchorEl={anchorRef.current} role='menu' transition disablePortal>
				{({ TransitionProps }) => (
					<Grow {...TransitionProps} style={{ transformOrigin: 'center top' }}>
						<Paper>
							<ClickAwayListener onClickAway={closeMenu}>
								<MenuList autoFocusItem={menuIsOpen} className={classes.menu}>
									{
										[...occasions].map(occasion => (
											<NavLink onClick={() => closeMenu(null)} key={occasion.id} to={"/products/occasions/" + occasion.slug} style={{ textDecoration: 'none', color: 'white' }}>	<MenuItem key={occasion.id}>{occasion.name}</MenuItem> </NavLink>
										))
									}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}

			</Popper>
		</React.Fragment>
	)
}

export default ShopOccasion;