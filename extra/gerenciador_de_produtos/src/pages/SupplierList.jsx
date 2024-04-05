import React, { useEffect, useState } from 'react'
import axios from '../../api'


const SupplierList = () => {

    const [suppliers, setSuppliers] = useState([])

    useEffect(() => {
        axios.get('/suppliers')
        .then(response => {
            setSuppliers(responce.data)
        })
        .catch(error => console.error("Ocorreu um erro: ",error))
    }, []);

  return (
    <div className="container mt-5">
        <h2 className="mb-4">Lista de Fornecedores</h2>
        <button className="btn btn-primary mb-2">Adicionar Fornecedor</button>
    </div>
  )
}

export default SupplierList