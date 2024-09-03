import React from 'react';
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";

export function MovieBlock({movieName, rating, description}) {
    return(
            <Container>
                <h2>{movieName}</h2>
                
                <div id='rating'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></div>
                
                <p>{description}</p>
            </Container>
    )
}