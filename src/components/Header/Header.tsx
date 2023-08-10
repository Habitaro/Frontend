import React, { FC } from 'react';
import styles from './Header.module.css';
import Logo from './components/Logo/Logo';
import AuthButtons from './components/AuthButtons/AuthButtons';

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<AuthButtons />
		</div>
	);
};

export default Header;
