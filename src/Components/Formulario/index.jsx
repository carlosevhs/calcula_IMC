import { useEffect, useState } from "react";
import styles from './Formulario.module.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [nome, setNome] = useState('');



    const renderizaResultado = () => {
        const QuadradoDaAltura = altura*altura;
        const imc = peso / QuadradoDaAltura;
        const imcFormatado = imc.toFixed(2);
        const pesoMin = QuadradoDaAltura * 18.5;
        const pesoMinFormatado = pesoMin.toFixed(2);
        const pesoMax = QuadradoDaAltura * 25 ;
        const pesoMaxFormatado = pesoMax.toFixed(2);

        if (imc<18.5){
            return(
                <p>Olá {nome}, seu IMC deu {imcFormatado}, e você está abaixo do peso normal. Seu peso ideal é entre {pesoMinFormatado}kg e {pesoMaxFormatado}kg</p>
            )
        } 
        if (imc >= 18.5 && imc < 25){
            return(
                <p>Olá {nome}, seu IMC deu {imcFormatado}, e você está com seu peso normal.</p>
            )
        } 
        if (imc >= 25 && imc < 30){
            return(
                <p>Olá {nome}, seu IMC deu {imcFormatado}, e você está com sobrepeso. Seu peso ideal é entre {pesoMinFormatado}kg e {pesoMaxFormatado}kg</p>
            )
        } 
        if (imc >= 30 && imc < 35){
            return(
                <p>Olá {nome}, seu IMC deu {imcFormatado}, e você está com obesidade classe I. Seu peso ideal é entre {pesoMinFormatado}kg e {pesoMaxFormatado}kg</p>
            )
        } 
        if (imc >= 35 && imc < 40){
            return(
                <p>Olá {nome}, seu IMC deu {imcFormatado}, e você está com obesidade classe II. Seu peso ideal é entre {pesoMinFormatado}kg e {pesoMaxFormatado}kg</p>
            )
        } 
        else {
            return (
                <p>Olá {nome}, seu IMC deu {imcFormatado}, e você está com obesidade classe III. Seu peso ideal é entre {pesoMinFormatado}kg e {pesoMaxFormatado}kg</p>
            )
        }
    }

    const resultado = () => {
        if (nome.length > 1 && peso > 0 && altura > 0) {
            return renderizaResultado();
        }
    }

    return (
        <form className="container">
            <b>Nome</b>
            <input type="text" placeholder="Seu nome" onChange={evento => setNome(evento.target.value)}/>
            <b>Altura</b>
            <input type="number" placeholder="Altura em metros" onChange={({target}) => setAltura(parseFloat(target.value))} />
            <b>Peso</b>
            <input type="number" placeholder="Peso em kg" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            {resultado()}
        </form>
    )
}

export default Formulario;