import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
    position: absolute;
    background-color: gray;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
    width: 450px;
    top: 100px;
    right: 0;
    z-index: 8;
    border-radius: 10px 0 0 10px;
    padding: 20px;
    & span {
        display: flex;
        margin-top: 10px;
        cursor: pointer;
        &:hover{
            opacity: 90%;
        }
    }
`

export const LinkStyled = styled(Link)`
&:hover {
  opacity: 90%;
}
`
export const UserNameStyled = styled.h2`
  font-weight: 400;
`
