import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    > div#especific {
        > header {
            height: 120px;
        }
    }
`

export const Content = styled.div`
    margin: 0 12%;

    > a {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 24px;
    }

    > a, svg {
        background: none;
        color: #FF859B;
        text-decoration: none;
    }

    header h1 {
        font-size: 36px;
    }

    div#subheader {
        color: #F4EDE8;
        display: flex;
        align-items: center;
        gap: 5px;

        margin-bottom: 30px;

        > img {
            height: 16px;
            width: 16px;
            border-radius: 50%;
        }
    }

    div#noterelated {
        max-height: 50vh;
        overflow-y: auto;
        padding-right: 10px;
    }

    div#noterelated::-webkit-scrollbar {
        width: 8px;
    }

    div#noterelated::-webkit-scrollbar-track {
        background: transparent;
    }

    div#noterelated::-webkit-scrollbar-thumb {
        background-color: #FF859B;
        border-radius: 8px;
        border: 2px solid transparent;
    }

    div#noterelated::-webkit-scrollbar-thumb:hover {
        background-color: #FF859B
    }     

    div#tags {
        display: flex;

        color: #E5E5E5;
    }

    p#noteComment {
        color: #F4EDE8;
        font-family: "Roboto Slab", serif;
        margin-top: 30px;
    }
`