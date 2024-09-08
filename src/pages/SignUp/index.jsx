import React from 'react';

import { FiMail, FiLock,FiArrowLeft } from 'react-icons/fi';
import { GoPerson } from "react-icons/go";

import { Container, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp() {
    return(
        <Container>
            <aside>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Crie sua contan</h3>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={GoPerson}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <a href=""><FiArrowLeft /> Voltar para o login</a>
            </aside>

            <div id='background'>
                <Background />
            </div>
        </Container>
    )
}