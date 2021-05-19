import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import CarWheel from '../../../images/CarWheel.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = {
                    name: result.user.displayName,
                    email: result.user.email
                };
                setLoggedInUser(user);
                idToken();
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    const idToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
        <main className="text-center">
            <section className="mt-5">
                <img src={CarWheel} alt="" />
                <h1 className="color-highlight">Driving School</h1>
            </section>
            <section className="mt-5 d-flex justify-content-center">
                <h5 onClick={handleGoogleSignIn} className="login-button mt-5"><FontAwesomeIcon className="login-icon" icon={faGoogle} />Login with Google</h5>
            </section>
        </main>
    );
};

export default Login;