import React, { useEffect } from "react";
import styles from "../Css/ModalActions.module.css";

export default function ModalActions(props) {
  console.log(props.id);

  const id = props.id

  // const [produto,setProduto] = useState({
  //   id:props.id,
  //   nome: "",
  //   descricao: "",
  //   preco: 0
  // });


  useEffect(()=>{
    fetch(`http://localhost:5001/produtos/${id}`)
  .then((response)=> response.json())
  .then((response)=> setProduto(response))
  .catch(error=>console.log(error))
  },[id])

  const handleChange = (e)=>{
    const {nome, value} = e.target

    setProduto({...setProduto, [nome]:value})
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    // Realizando o fetch para Edita/UPDATE do produto 
    fetch(`http://localhost:5001/produtos/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto)
  })
  .then((response)=> console.log(response.status))
  .catch(error=>console.log(error))
  }

  if (props.open[0] != 0) {
    return (
      <div className={styles.container}>
        <h1>Modal produtos</h1>

        <button onClick={() => props.setOpen(false)}>Close - Modal</button>

        <div className="">
          <form action="" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados do produto</legend>
              <div className="">
                <label htmlFor="idNome">Digite o nome:</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  placeholder="EX: GTA6"
                  // value={produto.nome}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="idDescricao">Digite a descrição</label>
                <input
                  type="text"
                  name="descricao"
                  id="idDescricao"
                  placeholder="EX:Jogo de tiro"
                  // value={produto.descricao}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="idPreco">Digite o preço</label>
                <input
                  type="number"
                  name="preco"
                  id="idPreco"
                  placeholder="EX: 90,00R$"
                  // value={produto.preco}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <button>Editar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
