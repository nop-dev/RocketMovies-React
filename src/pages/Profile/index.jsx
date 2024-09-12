import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Avatar, Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function Profile() {
    return(
        <Container>
            <header>
                <Link to={"/"}><FiArrowLeft /> Voltar</Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/nop-dev.png" alt="Imagem do usuário" />

                    <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file" />
                </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title={"Salvar"}/>
            </Form>
        </Container>
    )
}