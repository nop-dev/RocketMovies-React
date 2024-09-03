import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

import { Container } from "./styles";

import { Tag } from '../Tags';


export function MovieBlock({movieName, rating, description}) {
    return(
            <Container>
                <h2>{movieName}</h2>
                
                <div id='rating'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></div>
                
                <p>{description}</p>

                <div id="tags"> <Tag tagName="Animação"/> <Tag tagName="Disney"/> <Tag tagName="Futurístico"/> </div>
            </Container>
    )
}