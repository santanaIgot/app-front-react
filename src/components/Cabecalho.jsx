import React from "react";
import { Link } from "react-router-dom";

export default function Cabecalho(params) {
  return (
    <>
      <header>
        <nav className="">
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/login">Login</Link>
                </li>
                <li>
                    <Link to = "/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to = "/sobre">Sobre nós</Link>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
}
