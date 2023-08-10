import React, { FC } from 'react';
import logo from '../../../../assets/img/habitaro_logo.png';
import styles from '../../Header.module.css';

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<img src={logo} alt='logo' />
			<p>ABITARO</p>
		</div>
	);
};

export default Logo;
