import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 16px;

    display: flex;
    align-items: center;

    background-color: #262529;

    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        height: 100%;

        color: #F4EDE8;
        background: transparent;
        border: 0;

        font-size: 16px;
        
        &:focus-visible {
            outline: none;
        }
    }

    > svg {
        margin-right: 16px;
        background: none;
        color: #948F99;
    }
`