import { styled } from 'styled-components';

import backgroundImg from '../../assets/inpage.png'

export const Container = styled.form`
    height: 100vh;
    display: flex;

    * {
        font-family: "Roboto Slab", serif;
    }

    > aside {
        padding: 0 160px;
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;

        align-items: left;
        justify-content: center;

        > h1, h3, span {
            width: 100%;
        }

        > h1 {
            font-family: "Roboto Slab", serif;
            font-size: 54px;
            color: #FF859B;
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
        
        > div, button {
            min-width: 375px;
            max-width: 375px;
        }

        > div:first-of-type {
            margin-bottom: 8px;
        }

        > button {
            margin: 24px 0 42px  ;
         font-size: 16px;
            text-align: center;
            color: #FF859B;
            text-decoration: none;   }

        > a {
        
    }
    }
    `
    
export const Background = styled.div`
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    height: 100%;
`
    