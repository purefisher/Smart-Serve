import React from 'react';

const LoginPage = (props: any) => {
    return (
        <div>
            <button onClick={() => props.setsignedin(true)}>Login</button>
        </div>
        
    )
}

export default LoginPage;
