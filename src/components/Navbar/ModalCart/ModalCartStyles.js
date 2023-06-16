import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ContainerStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    width: 500px;
    height: calc(100vh - 4rem);
    padding: 15px;
    background-color: orchid;
    border-radius: 0 0 0 20px;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
`

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: azure;
    color: white;
    cursor: pointer;
`

export const TitleStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 20px 0;
    & h1 {
        margin-top: 0;
    }
`

export const MainContainerStyled = styled.div`
    height: 55%;
`

export const ProductsWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding: 10px;
    padding-left: 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        background: transparent;
    }
    &::-webkit-scrollbar:horizontal {
        display: none;
    }

    @media (max-height: 800px) {
        height: 235px;
    }
`

export const ProductContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 360px;
    background-color: aliceblue;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 15px;
    & img {
        width: 80px;
        height: 80px;
        border-radius: 16px;
        object-fit: cover;
    }
`

export const TextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 190px;
`

export const CardTitleStyled = styled.h3`
    margin: 0;
    margin-bottom: 2px;
    font-weight: 600;
`

export const TextStyled = styled.p`
    margin: 0;
    color: blueviolet;
    font-size: 14px;
`

export const PriceStyled = styled.span`
    font-weight: 800;
    font-size: 17px;
    color: greenyellow;
`

export const PriceContainerStyled = styled.div`
    z-index: 100;
    background-color: grey;
    & p {
        text-align: center;
        margin-bottom: 0;
    }
`

export const SubtotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
    justify-content: center;
`

export const QuantityContainerStyled = styled.div`
    display: flex;
    align-items: center;
`