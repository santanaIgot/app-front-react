import React from "react";
import styles from "../Css/ModalActions.module.css";


export default function ModalActions(props) {
  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>Modal produtos</h1>
        <button onClick={()=>props.setOpen(false)}>Close - Modal</button>

        <div className="">
            <form action="">
                <fieldset>
                    <legend>Dados do produto</legend>
                    <div className="">
                        <label htmlFor="idNome">Digite o nome:</label>
                        <input type="text" name="nome" id="idNome" placeholder="EX: GTA6" />
                    </div>
                    <div className="">
                        <label htmlFor="idDescricao">Digite a descrição</label>
                        <input type="text" name="descricao" id="idDescricao" placeholder="EX:Jogo de tiro" />
                    </div>

                     <div className="">
                        <label htmlFor="idPreco">Digite o preço</label>
                        <input type="number" name="preco" id="idPreco" placeholder="EX: 90,00R$" />
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
