import React from 'react';
import { Button } from '@material-ui/core';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import './header.css';

interface IHeaderProps {
	isOpen: boolean,
	listItems: string[]
}


const header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
	if (props.isOpen) {
		return (
			<ul>
				{
					[...props.listItems].map(item => (
						<Button key={item}>{item}</Button>
					))
				}
			</ul>
		)
	} else {
		return (<span style={{ display: 'none' }}></span >);
	}
}

export default header;