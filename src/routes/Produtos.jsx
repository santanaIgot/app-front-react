import React, { useEffect, useState } from "react"
import ModalActions from "../components/ModalActions";


export default function Produtos() {

    // armazenar no use state valores que receber do back-end
        const [produtosApi, setProdutosApi] = useState([]) 
        useEffect(
            // useEffect recebe uma arrowFunction quando acontece determinado evento 
            ()=>{
                // quando ocorrer qualquer evento ele fará uma requisição HTTP
                fetch('http://localhost:5000/produtos')
                .then((resp)=>resp.json())
                .then((resposta)=>{
                    console.log(resposta);
                    setProdutosApi(resposta)
                })
                .catch((error)=>console.log(error))
            },[]
        )

        const handleDelete = (id)=>{
            fetch(`http://localhost:5000/produtos/${id}`, {method:'delete'})
            .then(()=>(window.location = '/produtos'))
            .catch((error)=> console.log(error))
        }

        // usestate para trabalhar com modal

        const [open, setOpen] = useState(
            false
        )
  
    return(
        <>

        <section>
            <button>Caadastrar jogo</button>

            <h1>Lista de jogos</h1>

            {/* importando modalActions */}

            {open ? <ModalActions open={open} setOpen={setOpen}/> :""}

            <button onClick={()=>setOpen(true)}>Open-modal </button>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Editar/excluir</th>
                    </tr>
                </thead>
                <tbody>
                
                    { 
                        produtosApi.map((prod)=>(
                            // é criado este componente em js para cada produto que for adicionado esta arrow function ir mapeando a api
                            // e ir criando as linhas para adicionar os prdoutos 
                            //  tambem da para ser um card para ir adicionando as rotas 
                          
                            <tr key={prod.id}>
                                <td>{prod.nome}</td>
                                <td>{prod.preco}</td>
                                <td>{prod.descricao}</td>
                                <td>
                                    <button onClick={handleDelete.bind(this,prod.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="4">Lista jogos</td>
                    </tr>
                </tfoot>
            </table>
        </section>
        </>
    )
}