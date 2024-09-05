import { styled } from 'styled-components';

import backgroundImg from '../../assets/inpage.png'

export const Container = styled.form`
    height: 100vh;
    display: flex;
    
    * {
        font-family: "Roboto Slab", serif;
    }

    > aside {
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        > h1 {
            font-family: "Roboto Slab", serif;
            font-size: 54px;
            color: #FF859B;
        }

        > span, h3 {
            width: 100%;
            margin-left: 45%;
        }

        > span {
            font-size: 14px;
            color: #CAC4CF;
            margin-bottom: 48px;
        }

        > h3 {
            color: #F4EDE8;
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 48px;
        }
    }
    `
    
export const Background = styled.div`
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    height: 100%;
`
    