import styled from 'styled-components'

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    height: 100vh;
    `

export const TopBackground = styled.div`
    background: linear-gradient(to right, #fe7e5d, #7f3841);
    border-radius: 30px;
    height: 30vh;
    width: 90vw;

    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
    max-width: 100%;
    max-height: 100%;
    
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 400px;
    width: 100%;

`

export const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
`


export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    width: 100%;
    padding: 10px;

`

export const Input = styled.input`
    padding: 10px 20px; 
    border-radius: 10px;
    border: 1px solid #c7c5c5ff;
    background-color: #fff;
    outline: none;
    width: 100%;
    max-width: 400px;
    margin-left: -20px;

`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin: 0;

    span {
        color: #d83f3fff;
        }
`

