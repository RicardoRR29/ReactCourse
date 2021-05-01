import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button type='submit' onClick={isGoogleSignIn ? signInWithGoogle : null} className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}>
        {children}
    </button>
)

export default CustomButton;