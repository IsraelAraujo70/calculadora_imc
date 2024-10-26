import { useState } from 'react'
import styles from './Header.module.css'

const Header = () =>{
    const [imcInfoShow, setImcInfoShow] = useState(false)
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Calculadora de <a className={styles.IMC} href="" onClick={(e) =>{e.preventDefault();
                if (imcInfoShow == true){
                    setImcInfoShow(false)
                }
                else{
                    setImcInfoShow(true);
                }
                } }>IMC</a></h1>
            {imcInfoShow &&(
                <div className={styles.imcInfo}>
                    <h2>O que é o IMC?</h2>
                        <p>
                            O Índice de Massa Corporal (IMC) é uma medida utilizada para avaliar se uma pessoa está dentro de um peso saudável em relação à sua altura. Ele é calculado dividindo o peso da pessoa (em quilogramas) pelo quadrado da altura (em metros), usando a fórmula:
                        </p>
                        <p>
                            <strong>IMC = Peso (kg) / Altura (m)²</strong>
                        </p>
                        <p>
                            O valor resultante é comparado com faixas estabelecidas pela Organização Mundial da Saúde (OMS) para classificar o peso em categorias, como:
                        </p>
                        <ul>
                            <li>Abaixo do peso</li>
                            <li>Peso normal</li>
                            <li>Sobrepeso</li>
                            <li>Obesidade</li>
                        </ul>
                        <p>
                            O IMC é uma ferramenta simples e amplamente usada para indicar possíveis problemas de saúde relacionados ao peso, embora não leve em conta aspectos como composição corporal (gordura versus massa muscular).
                        </p>
                </div>
            )}
        </header>
    )
}

export default Header