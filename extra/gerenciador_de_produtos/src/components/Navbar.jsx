import React from 'react'

const Navbar = () => {
  return (
    <nav className='menu'>
        <div>
            <Link to="/">Painel de Controle</Link>
            <Link to="/add-fornecedor">Adicionar Fornecedor</Link>
            <Link to="/listar-fornecedore">Listar Fornecedores</Link>
            <Link to="/listar-produtos">Listar Produtos</Link>
            <Link to="/add-produto">Adicionar Produto</Link>
            <Link to="/add-cliente">Adicionar Cliente</Link>
            <Link to="/"></Link>

        </div>
    </nav>
    
  )
}

export default Navbar