import { useState } from 'react'
import styles from './Form.module.css'
const Form = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const verificaPesoAltura = () =>{
        if (peso && altura != 0){
            return true
        }
        else {
            return false
        }
    }
    function imc(peso, altura) {
        let alturaSobre100 = altura / 100;
        let imc = peso / (alturaSobre100 ** 2);
        return imc.toFixed(2); 
    }

    function faixa(imc) {
        if (imc < 18.5) {
            return 1; // Baixo Peso
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 2; // Peso Normal
        } else if (imc >= 25 && imc < 27.5) {
            return 3; // Excesso de Peso
        } else if (imc >= 27.5 && imc < 30) {
            return 4; // Obesidade
        } else if (imc >= 30 && imc < 35) {
            return 5; // Obesidade Classe I
        } else if (imc >= 35 && imc < 40) {
            return 6; // Obesidade Classe II
        } else if (imc >= 40) {
            return 7; // Obesidade Mórbida
        } else {
            return null; // Caso o valor não se enquadre em nenhuma faixa
        }
    }


    return(
        <div className={styles.form}>
            <h3>Insira sua Altura e Peso!</h3>
            <div className={styles.formBox}>
                <input type="number" placeholder='Altura(cm)' min="0" onChange={(e)=> setAltura(Number(e.target.value))}/>
                <input type="number" placeholder='Peso(kg)' min="0" onChange={(e)=> setPeso(Number(e.target.value))}/>
            </div>
            {
                verificaPesoAltura() && (
                    <>
                    <h4>Resultado</h4>
                    <div className={styles.showAeP}>
                        <p>Sua <b>altura</b> é: {altura} cm</p>
                        <p>Seu <b>peso</b> é: {peso} kg</p>
                        <p>O seu <b>IMC</b> é: {imc(peso, altura)} kg/m²</p>
                    </div>
                    <table className={styles.imcTable}>
                        <thead>
                            <tr>
                                <th>IMC</th>
                                <th>CLASSIFICAÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IMC &lt; 18,5 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 1 ? styles.tableSelected : styles.table1}>Baixo Peso</td>
                            </tr>
                            <tr>
                                <td>IMC ≥ 18,5 e &lt; 24,9 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 2 ? styles.tableSelected : styles.table2}>Peso Normal</td>
                            </tr>
                            <tr>
                                <td>IMC ≥ 25 e &lt; 27,5 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 3 ? styles.tableSelected : styles.table3}>Excesso de Peso</td>
                            </tr>
                            <tr>
                                <td>IMC ≥ 27,5 e &lt; 30 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 4 ? styles.tableSelected : styles.table4}>Obesidade</td>
                            </tr>
                            <tr>
                                <td>IMC ≥ 30 e &lt; 34,9 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 5 ? styles.tableSelected : styles.table5}>Obesidade Classe I</td>
                            </tr>
                            <tr>
                                <td>IMC ≥ 35 e &lt; 39,9 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 6 ? styles.tableSelected : styles.table6}>Obesidade Classe II</td>
                            </tr>
                            <tr>
                                <td>IMC &gt; 40 Kg/m²</td>
                                <td className={faixa(imc(peso,altura)) == 7 ? styles.tableSelected : styles.table7}>Obesidade Mórbida</td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                )
            }
        </div>
    )
}
export default Form