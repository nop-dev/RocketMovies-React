import React from 'react';
import { FiArrowLeft,FiClock } from "react-icons/fi";

import { Container, Content } from './styles';

import { Header } from '../../components/Header' 
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags';
import { Link } from 'react-router-dom';

export function MoviePreview() {
    return(
        <Container>
            <div id='especific'>
                <Header />
            </div>
            
            <Content>
                <Link to={"/"}><FiArrowLeft /> Voltar</Link>

                <Section title={"WALL-E"} />

                <div id='subheader'>
                    <img src="https://github.com/nop-dev.png" alt="Imagem do usuário" /> Por Yuri Sousa <FiClock /> 23/05/22 às 08:00
                </div>

                    <div id="tags"> <Tag tagName="Animação"/> <Tag tagName="Disney"/> <Tag tagName="Futurístico"/> </div>

                    <p id='noteComment'>Wall-E é uma animação da Pixar ambientada em um futuro distópico e sombrio, onde a humanidade deixou a Terra após transformá-la em um imenso depósito de lixo. O planeta, sufocado pela poluição, tornou-se inabitável, e a população se refugiou em uma nave espacial chamada Axiom, onde vivem em um estado de constante consumo e completa dependência da tecnologia, sem nem precisar caminhar, devido ao uso de cadeiras flutuantes. Enquanto isso, na Terra, o pequeno e solitário robô Wall-E (abreviação de Waste Allocation Load Lifter: Earth-Class) continua incansavelmente sua tarefa de compactar o lixo, uma rotina que segue há séculos. <br /><br />

                    Apesar de seu trabalho mecânico e repetitivo, Wall-E desenvolveu traços humanos, como curiosidade e emoção, colecionando objetos que encontra entre os detritos e alimentando um profundo desejo de companhia e conexão. Sua vida muda completamente quando ele conhece EVE, uma robô altamente avançada enviada à Terra para buscar sinais de vida vegetal que possam indicar que o planeta está se regenerando. Wall-E se apaixona por EVE e, em uma tentativa de se aproximar, acaba envolvido em uma jornada épica que vai muito além de seus limites. <br /><br />

                    A partir do momento em que EVE descobre uma pequena planta, o destino da humanidade entra em jogo. Wall-E e EVE embarcam em uma aventura intergaláctica para devolver a planta à Axiom, o que pode significar a chance de os humanos retornarem à Terra e restaurarem o equilíbrio perdido. No entanto, a tarefa não é simples: eles enfrentam desafios tecnológicos, resistências do próprio sistema da nave e a letargia de uma população acomodada, imersa em um estilo de vida automatizado e despreocupado com o meio ambiente.</p>
            </Content>
        </Container>
    )
}