import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../api'

const ProductForm = () => {
  const [product, setProduct] = useState({name: '', price: '', supplierId: ''})
  const [suppliers, setSuppliers] = useState([])
  const navigate = useNavigate()
    const { id } = useParams()

  useEffect(() => {
    axios.get('/suppliers')
    .then(response => {
      setSuppliers(response.data)
    })
    .catch(error => console.error('Erro ao buscar produto', error))

      if (id) {
          axios.get(`/products/${id}`)
          .then(response => {
              setProduct(response.data)
          })
          .catch(error => console.error('Erro ao buscar produto', error))
      }  else {
          setProduct({ name: '', price: '', supplierId: ''})
      }
  }, [id])

  function handleChange(event) {
      const {name, value} = event.target
      setProduct(prevState => ({ ...prevState, [name]: value }))
  }
  function handleSubmit(event) {
      event.preventDefault()
      const method = id ? 'put' : 'post'
      const url = id ? `/suppliers/${id}` : '/suppliers'

      axios[method](url, supplier)
      .then(() => {
          alert(`Fornecedor ${id ? 'atualizado' : 'adicionado'} com sucesso!`) 
          navigate("/listar-fornecedores")       
      })
      .catch(error => console.error("Ocorreu um erro: ",error))
  }

  return (
    <div>ProductForm</div>
  )
}

export default ProductForm