import { styled } from 'styled-components'

export const Container = styled.div`
    margin-bottom: 30px;
    padding: 32px;
    border-radius: 16px;
    color: white;

    background: #ff859b0d;

    > * {
        background: transparent;
    }

    > h2 {
        font-family: "Roboto Slab", serif;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    div#rating {
        display: flex;
        gap: 6px;

        > svg {
            background-color: transparent;
            color: #FF859B;
        }
    }

    > p {
        margin-top: 8px;

        color: #999591;
    }

    div#tags {
        display: flex;
    }
`