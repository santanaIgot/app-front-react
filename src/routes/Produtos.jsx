import React from "react"


export default function Produtos(params) {

  
    return(
        <>

        <section>
            <button>Caadastrar jogo</button>

            <h1>Lista de jogos</h1>

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
                    {/* Carregar dados */}
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