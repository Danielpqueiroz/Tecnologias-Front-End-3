import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes) {
        if (mes === "Setembro"){
            return "Prevenção ao suicidio"
        } else if (mes === "Outubro") {
            return "Conscientização sobre o câncer de mama."
        }else {
            return "Prevenção ao combate ao câncer de prótata."
        }
    }
    function defineCorDeFundo (mes) {
        if (mes === "Setembro"){
            return styles.setembroClass
        } else if (mes === "Outubro") {
            return styles.outubroClass
        }else {
            return styles.novembroClass
        }
    }
  return (
    <div className={defineCorDeFundo(props.mes)}>
        {defineMensagem(props.mes)}
    </div>
  )
}

export default Campanha