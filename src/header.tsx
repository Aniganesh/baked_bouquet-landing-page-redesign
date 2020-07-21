import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

interface IHeaderState {
	shouldShowHeader: boolean;
}

const header: React.FC<{}> = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [headerDisplay, setHeaderDisplay] = useState<IHeaderState>({ shouldShowHeader: false })

	const toggleHeader = () => {
		setHeaderDisplay({ shouldShowHeader: !headerDisplay.shouldShowHeader });
	}
	return (
		<div>
			<Button onClick={() => toggleHeader()}>
				<MenuIcon />
			</Button>
			<Drawer anchor="left" open={headerDisplay.shouldShowHeader}>
				<List>
					{
						['Shop Collection', 'Mother\'s day', 'Shop Occasion', 'Events', 'About us', 'Blog', 'Franchise'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemText primary={text} />
							</ListItem>))
					}
				</List>
			</Drawer>

		</div>
	)
}

export default header;