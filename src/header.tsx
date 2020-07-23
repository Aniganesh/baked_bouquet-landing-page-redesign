import React from 'react';
import { Button } from '@material-ui/core';
import './header.css';

interface IHeaderProps {
	isOpen: boolean,
	listItems: string[]
}


const header: React.FC<IHeaderProps | null> = (props: IHeaderProps) => {
	if (props.isOpen) {
		return (
			<ul className="header-list">
				{
					[...props.listItems].map(item => (
						<Button style={{margin: '2rem'}} key={item}>{item}</Button>
					))
				}
			</ul>
		)
	} else {
		return (null);
	}
}

export default header;