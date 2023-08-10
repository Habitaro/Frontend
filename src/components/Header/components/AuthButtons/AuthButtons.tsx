import React from 'react';
import { getIsAuth } from '../../../../redux/reducers/authReducer';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

const AuthButtons = () => {
	const isAuth = useSelector(getIsAuth);
	return (
		<div>
			{isAuth ? (
				<>
					<img src='' alt='avatar' />
					<div>
						<p></p>
						<p></p>
					</div>
				</>
			) : (
				<>
					<Button variant='outlined'>LOG IN</Button>
					<Button variant='outlined' color='secondary'>
						SIGN UP
					</Button>
				</>
			)}
		</div>
	);
};

export default AuthButtons;
