import { styled } from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    > section, section#movieNotes {
        margin: 0 12%;
    }

    > section#movieNotes {
        overflow-y: auto;
        padding-right: 10px;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: none; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #FF859B; 
        border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #FF859B; 
    }

    padding-bottom: 20px;
`