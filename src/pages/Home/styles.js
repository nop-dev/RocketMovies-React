import { styled } from 'styled-components'

export const Container = styled.div`
height: 100vh; /* Altura mínima será 100% da altura da viewport */
        display: flex;
        flex-direction: column;


    > section#movieNotes {
        overflow-y: auto;
        padding: 0 12%;
    }

    padding-bottom: 40px;
`