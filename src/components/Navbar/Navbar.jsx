import React from 'react'
import { CartNavStyled, LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavStyled } from './NavbarStyles'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaUserAlt } from 'react-icons/fa';
// import { HiHome } from 'react-icons/hi';
import { BsHouseDoor } from "react-icons/bs";
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';
import { BsShop } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import logo from "../../img/logo.png";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <NavbarContainerStyled>
            <ModalCart />
            <ModalUser />
            <div>
                <Link to='/'>
                    <img
                        src={logo}
                        alt='Logo'
                    />
                </Link>
            </div>
            <LinksContainerStyled>
                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link to='/'>
                        <LinkContainerStyled home>
                            <BsHouseDoor />
                        </LinkContainerStyled>
                        Inicio
                    </Link>
                </motion.div>




                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link to='/'>
                        <LinkContainerStyled>
                            <BsShop />
                        </LinkContainerStyled>
                        Tienda
                    </Link>
                </motion.div>

                <motion.div whileTap={{ scale: 0.97 }}>
                    <Link to='/'>
                        <LinkContainerStyled>
                            <BsPersonVcard />
                        </LinkContainerStyled>
                        Contacto
                    </Link>
                </motion.div>






                <CartNavStyled>
                    <CartIcon />
                </CartNavStyled>

                <UserNavStyled>
                    <UserContainerStyled onClick={() => navigate('/register')}>
                        <SpanStyled>Iniciar sesión</SpanStyled>
                        <FaUserAlt />
                    </UserContainerStyled>
                </UserNavStyled>
            </LinksContainerStyled>
        </NavbarContainerStyled>
    )
}

export default Navbar