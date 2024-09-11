import { styled } from 'styled-components'

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

    > section header h1 {
        font-size: 36px;
    }

    .input-wrapper {
        width: 100%;
        display: flex;
        gap: 40px;

        > div {
            width: 100%;
        }
    }

    > div#tagger {
        > h3 {
            font-family: "Roboto Slab", serif;
            font-size: 20px;
            color: #999591;
            font-weight: 400;

            margin-bottom: 24px;
        }
    }

    > div #tagspace {
        background-color: #0D0C0F;
        border-radius: 8px;
        height: 90px;
        margin-bottom: 40px;

        > h3 {
            margin-bottom: 24px;
        }
    }

    .button-wrapper {
        display: flex;
        gap: 40px;

        > button:first-child {
            background-color: #0D0C0F;
            color: #FF859B;
        }
    }
`
