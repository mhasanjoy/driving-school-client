import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    const idToken = sessionStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || idToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;