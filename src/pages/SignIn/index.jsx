import React from 'react';

import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function SignIn() {
    return(
        <Container>
            <aside>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Faça seu Login</h3>

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

                <Button title="Entrar"/>

                <Link to={"/register"}>Criar Conta</Link>
            </aside>

            <div id='background'>
                <Background />
            </div>
        </Container>
    )
}