import React from 'react';
import { FiPlus } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";

import { Container } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section/index.jsx';
import { MovieBlock } from '../../components/MovieBlock/index.jsx';

export function Home() {
    return (
        <Container>
            <Header />
                <Section title={"oi"} $btnActivate btnTitle={"Adicionar Filme"} btnIcon={FiPlus} />

                <section id='movieNotes'>
                    <MovieBlock movieName="WALL-E" rating="5" description="O filme se passa no ano de 2805, época em que a Terra é um planeta abandonado e coberto por lixo, resultado de décadas de consumismo em massa, facilitado pela megacorporação Buy-n-Large (BnL). Desistindo de restaurar o ecossistema, a BnL evacuou a Terra, levando a população a viver no espaço em uma nave estelar chamada Axiom, totalmente automatizada, deixando no planeta apenas um exército de robôs compactadores de lixo chamados 'WALL-E'" />
                </section>

        </Container>
    );
};