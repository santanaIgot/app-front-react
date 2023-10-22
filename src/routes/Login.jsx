import React from "react"
import { useRef } from "react"
import Produtos from "./Produtos";

export default function Login(params) {
      const user = useRef()
      const password = useRef()

      const getUser = sessionStorage.getItem('userData');
      const getPassword = sessionStorage.getItem('senhaData')

    //   vai pegar valores inputados de usuario e senha 

    const handleSubmit =() =>{
        if(user.current.value === 'admin157' && password.current.value === 'admin157'){

            // autenticação com token 
            let token = Math.random.toString(16).substring(2) + Math.random.toString(16).substring(2);


            sessionStorage.setItem('userData','admin157');
            sessionStorage.setItem('senhaData', token)
        }else{
            alert("Usuario e senha inválidos")
        }
    }

    return(
        <>
            {/* if ternário */}

            {getUser && getPassword ?(
                <Produtos/>
            ):(
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="usuario">Usuário:</label>
                    <input type="text" ref={user}/>
                    <label htmlFor="password">Senha:</label>
                    <input type="text" ref={password}/>
                    <input type="submit" value="logar" />
                </form>
            )}

            {/* Se usuário e senha estiver OK, ele chama produtos */}
        </>
    )
}