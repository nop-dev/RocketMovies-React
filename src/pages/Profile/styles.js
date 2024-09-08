import { styled } from 'styled-components';

export const Container = styled.div`
    * {
        font-family: "Roboto Slab", serif;
    }
    
    > header {
        display: flex;
        align-items: center;
        padding-left: 10%;
        height: 150px;
        background-color: rgba(255, 133, 155, 0.05);

        > a, svg {
            background: none;
            color: #FF859B;
            text-decoration: none;
        }

        > a {
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;

    background: none;
    max-width: 340px;
    margin: 50px auto 0;

    > div:nth-child(4) {
        margin-top: 18px;
    }

    > button {
        margin-top: 20px;
    }
`

export const Avatar = styled.div`
    background: none;
    position: relative;
    margin: -124px auto 32px;
    width: 186px;
    height: 186px;
    
    > img {
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }
    
    > label {
        width: 48px;
        height: 48px;

        background-color: #FF859B;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            background: transparent;
            width: 20px;
            height: 20px;
            color: #312E38;
        }
    }
`