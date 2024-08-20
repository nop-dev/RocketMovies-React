import { styled } from 'styled-components'
// import { Link } from "react-router-dom";

export const Container = styled.header`
    height: 110px;
    padding: 0 12%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #3E3B47;

    > h1 {
        font-family: "Roboto Slab", serif;
        color: #FF859B;
    }

`
    
export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    };

    > div#identify {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 16px;

        font-size: 18px;
        font-weight: 600;
        line-height: 24px;

        color: white;

        span {
            color: gray;
            font-size: 14px;
            font-weight: 400;
        }
    }
`