import {useState} from 'react';
import axios from 'axios';

function Cadastrar(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSingUp = (e) =>{
        e.preventDefault();

        if (password === confirm_password){
            axios('http://localhost:3001/cadastro', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({email, password}),
            })
            .then((response) =>{
                console.log('Cadastro realizado com sucesso !', response.data);
                setError('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            })
            .catch((error) => {
                console.log('Erro ao realizar cadastro !', error);
                setError("Erro ao cadastrar Usuário !");
            })
        }else{
            setError('As senhas não conferem.');
        }
    }
    
    return(
        <div>
            <h1>Sing Up</h1>
            <form onSubmit={handleSingUp}>
                <label>Usuário: </label>
                <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required /><br></br>

                <label>Senha: </label>
                <input type='password' name='passwod' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} required /><br></br>

                <label>Confirme a Senha: </label>
                <input type='password' name='confirm_password' placeholder='Confirme a Senha' onChange={(e) => setConfirmPassword(e.target.value)} required/> <br></br>

                <button type='submit'>Cadastrar</button>

                <p>{error}</p>
            </form>
        </div>
    )
}

export default Cadastrar;