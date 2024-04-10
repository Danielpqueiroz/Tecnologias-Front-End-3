import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const ProductList = () => {

    const [products, setProducts] = useState ({})
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('/products?_expand=supplier')
      .then(response => {
          setProducts(response.data)
      })
      .catch(error => console.error("Ocorreu um erro: ",error))
    }, []);

    const fetchProducts = () => {
      axios.get('/products?_expand=supplier')
      .then(response => {
          setProducts(response.data)
      })
      .catch(error => console.error("Ocorreu um erro: ",error))
    }
    function deleteProduct(id) {
      axios.delete(`/products/${id}`)
      .then(()  => {
          alert("Produto excluído com sucesso!")
          fetchProducts()
      })
      .catch(error => console.error("Ocorreu um erro: ",error))
    }

  return (
    <div className="container mt-5">
        <h2 className="mb-4">Lista de Produtos</h2>
        <button onClick={() => navigate('/add-produto')}className="btn btn-primary mb-2">Adicionar Produto</button>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome:</th>
              <th>Preço:</th>
              <th>Fornecedor:</th>
              <th>Ações:</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.supplier.name}</td>
                  <td>
                    <button onClick={() => navigate(`/editar-produto/${product.id}`)}className='btn btn-sm btn-warning mr-2' >Editar</button>
                    <button onClick={() => deleteProduct(product.id)} className='btn btn-sm btn-danger'>Excluir</button>
                  </td>


                </tr>
              ))
            }
          </tbody>
        </table>
    </div>  )
}

export default ProductList