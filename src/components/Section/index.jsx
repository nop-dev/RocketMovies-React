import React from "react";
import { Container, HeaderSection } from "./styles"

import { Button } from '../../components/Button/index.jsx';

export function Section({title, $btnActivate, btnTitle, btnIcon}) {
    return(
        <Container>
            <HeaderSection>
                <h1>{title}</h1> 

                {$btnActivate && <Button title={btnTitle} icon={btnIcon}/>}
            </HeaderSection>
            
        </Container>
    )
    
}