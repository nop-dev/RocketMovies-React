import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles.js';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section'
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

export function CreateNote() {
    return(
        <Container>
            <div id='especific'>
                <Header />
            </div>

            <Content>
                <a href='#'><FiArrowLeft /> Voltar</a>

                <Section title={"Novo filme"} />

                <div className="input-wrapper">
                    <Input placeholder="Título" type="text"/>
                    <Input placeholder="Sua nota (de 0 a 5)" type="number"/>
                </div>

                <Textarea placeholder="Observações" />

                <div id="tagger">
                    <h3>Marcadores</h3>

                    <div id="tagspace"></div>
                </div>

                <div className="button-wrapper">
                    <Button title="Excluir Filme" />
                    <Button title="Salvar alterações" />
                </div>
                
            </Content>
        </Container>
    )
}