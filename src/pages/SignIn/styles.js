import { styled } from 'styled-components';

import BackgroundImage from '../../assets/inpage.jpg'

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
        
        > div, button, a {
            min-width: 375px;
            max-width: 375px;
        }

        > div:first-of-type {
            margin-bottom: 8px;
        }

        > button {
            margin: 24px 0 42px  ;
        }

        > a {
            font-size: 16px;
            text-align: center;
            color: #FF859B;
            text-decoration: none;
        }
    }

    > div#background {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
`
    
export const Background = styled.div`
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${BackgroundImage}) no-repeat center center;
    background-size: cover;
`
    