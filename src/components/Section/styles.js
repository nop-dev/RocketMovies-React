import styled from "styled-components";

export const Container = styled.section``

export const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;

    > h1 {
        font-family: "Roboto Slab", serif;
        font-size: 28px;
        font-weight: 400;
        color: white;
    }

    > button {
        max-width: 200px;
    }
`