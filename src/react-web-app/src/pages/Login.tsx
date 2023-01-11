import React from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = (props: any) => {
    return (
        <div>
            <button onClick={() => props.setsignedin(true)}>Login</button>
            {(props.signedin? <Navigate to="/Main" replace={true} />: null)} 
        </div>
        
    )
}

export default LoginPage;
