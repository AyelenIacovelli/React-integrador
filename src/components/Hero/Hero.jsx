import React from 'react'
import { HeroContainerStyled, HeroFormStyled, HeroSearchBarStyled, IconWrapperStyled } from './HeroStyles'
import Button from '../UI/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
    return (
        <HeroContainerStyled>
            <div>
                <h1 className='title' >¿Qué categoría buscás?</h1>
                <HeroFormStyled>
                    <HeroSearchBarStyled type='text' placeholder='Ej: Taza Naruto' />
                    <IconWrapperStyled>
                        <AiOutlineSearch />
                    </IconWrapperStyled>
                    <Button onClick={e => e.preventDefault()} radius='10' disabled='true'>
                        Buscar
                    </Button>
                </HeroFormStyled>
            </div>
            <div>
                <img
                    src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
                    alt=''
                />
            </div>
        </HeroContainerStyled>
    )
}

export default Hero