import React from "react"
import { Link } from "react-router-dom"

export default function Error(params) {
    return(
        <>
        <h1>PAGE NOT FOUND</h1>
        <Link to = "/">Voltar</Link>
        </>
    )
}