import React from 'react';
import { FiPlus } from "react-icons/fi";

import { Container, HomeStructure } from './styles.js';

import { Header } from '../../components/Header';

import { Section } from '../../components/Section/index.jsx';

export function Home() {
    return (
        <Container>
            <Header />
            
                <Section title={"oi"} $btnActivate btnTitle={"Adicionar Filme"} btnIcon={FiPlus}>
                    
                </Section>
            
            
        </Container>
    );
};