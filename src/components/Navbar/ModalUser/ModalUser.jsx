import React, { useState } from 'react'
import { LinkStyled, ModalContainerStyled, UserNameStyled, } from './ModalUserStyles';
import { AnimatePresence } from 'framer-motion';

const ModalUser = () => {
    const [hiddenMenu, setHiddenMenu] = useState(true);

    return (
        <AnimatePresence>
            {!hiddenMenu && (
                <ModalContainerStyled initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key='cart-user' >
                    <UserNameStyled>hola</UserNameStyled>
                    <LinkStyled to='/mis-ordenes'>Mis ordenes</LinkStyled>
                    <span onClick={() => setHiddenMenu(!hiddenMenu)}>Cerrar sesión</span>
                </ModalContainerStyled>
            )}
        </AnimatePresence>
    )
}

export default ModalUser