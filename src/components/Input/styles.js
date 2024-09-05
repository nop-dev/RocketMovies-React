import { styled } from 'styled-components'

export const Container = styled.div`
    background-color: #262529;
    padding: 16px;

    color: #F4EDE8;
    
    border: none;
    border-radius: 10px;

    display: flex;
    align-items: center;

    > input {
        font-size: 16px;
        border: none;
        background: none;
    }

    > svg {
        margin-right: 16px;
        background: none;
    }
`