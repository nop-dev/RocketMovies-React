import React from 'react';
import { Link } from "react-router-dom";

import { Container, Profile } from './styles'

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            {/* <Input /> */}

            <Profile to={"/profile"}>
                <div id="identify">
                    <p>Nop-Dev</p>
                    <span>sair</span>
                </div>

                <img src="https://github.com/nop-dev.png" alt="Foto do User" />                
            </Profile>
        </Container>
    )
}