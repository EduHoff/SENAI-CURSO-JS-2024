import { useState } from "react";
import axios from 'axios';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);


    const handleLogin = async (e) =>{
        e.preventDefault();

        console.log(email, password);
        //console.log('login clicked');
        
        try {
            const response = await axios.post('http://localhost:3001/login', 
                JSON.stringify({email, password}),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(response.data);
            setUser(response.data);

        } catch (error){
            if(!error?.response){
                setError('Erro ao acessar o servidor');
            }else if(error.response.status == 401){
                setError('Usuário ou senha inválidos')
            }
        }
    } 

    const handleLogout = async (e) => {
        e.preventDefault();
        setUser(null);
        setError('');

    }

    return(
      <div className="login-form-wrap">
        {user == null ? (
        <div>
            <h1>Login:</h1>
            <form className='login-form'>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email' 
                    onChange={(e) => setEmail(e.target.value)}
                    required/><br></br>
                
                <input type='password' 
                        name='password' 
                        placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)}
                        required/><br></br>
                
                <button type='submit' className='btn-login' onClick={(e) => handleLogin(e)}>Login</button>
            </form>
            
                <p>{error}</p>
            </div>
        ) :(
            <div>
                <h1>Bem vindo {user.name}</h1>
                <button 
                    onClick={(e) => handleLogout(e)}>
                        Logout
                </button>
            </div>
        )}
    </div>
  
    );
}

export default Login;