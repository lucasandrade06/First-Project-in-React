import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    min-height: 100vh;
    `
export const Title = styled.h2`
     color: #fff;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
`
export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
    `
export const CardUsers = styled.div`
    background-color: #243155ff;
    padding: 17px;
    border-radius: 32px;
    border: 1px solid #aaaaaaff;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-width: 300px;
    align-items: center;

    h2{
        color: #fff;
        font-size: 24px;
    }

    p{
        color: #fff;
        font-size: 18px;
    }
`
export const TrashIcon = styled.img`
    cursor: pointer;
    height: 25px;  
    
    &:hover {
        opacity: 0.7;
        }
        active {
        opacity: 0.5;
        }
`
export const AvatarIcon = styled.img`
    height: 80px;
    `
