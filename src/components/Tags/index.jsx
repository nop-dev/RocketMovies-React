import React from 'react';
import { Container } from "./styles";

export function Tag({tagName}) {
    return (
        <Container>
            {tagName}
        </Container>
    )
}