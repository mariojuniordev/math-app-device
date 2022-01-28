import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    margin: 8px;
    font-size: 1.5rem;
    font-weight: 500;

    input {
        border-radius: 10px;
        width: 5rem;
        padding: 10px 15px;
        border: none;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        border-bottom: 3px solid gray;
        border-left: 3px solid gray;
        border-right: 0.05px solid gray;
        border-top: 0.05px solid gray;

        color: #111;
        font-size: 20px;
        font-weight: 500;
        transition: 0.2s ease-out;
    }

    .text-input{
        width: 7rem;
    }
`

export const Baskhara = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        margin: 8px;
        font-size: 4rem;
        font-weight: 500;
`

export const Math = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        margin: 8px;
        font-size: 2.5rem;
        font-weight: 500;
`

export const BootstrapCardContainer = styled.div`
    width: 35rem;

    .card {
        border-radius: 20px;
        -webkit-box-shadow: -8px 7px 5px 1px rgba(52, 50, 50, 0.54);
        -moz-box-shadow:    -8px 7px 5px 1px rgba(52, 50, 50, 0.54);
        box-shadow:         -8px 7px 5px 1px rgba(52, 50, 50, 0.54);
    }
    
    .card-title{
        font-weight: 3rem;
    }
`

export const AlignCenterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
`