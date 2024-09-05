import React from 'react';

import { Container, Background } from './styles';
import { Button } from '../../components/Button';

export function SignIn() {
    return(
        <Container>
            <aside>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Faça seu Login</h3>

                <Button title="Entrar"/>
            </aside>

            <div id='backgroundEffect'>
                <Background />
            </div>
        </Container>
    )
}