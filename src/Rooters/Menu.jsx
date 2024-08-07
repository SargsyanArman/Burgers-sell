import React from 'react'
import { useParams } from 'react-router-dom'
import Snacks from '../Components/Main/RootesMenuList/Snacks'
import Burgers from '../Components/Main/RootesMenuList/Burgers'

const Menu = ({ add, handleMouseUp }) => {
    const { menu } = useParams()

    const getPathMenu = () => {
        switch (menu) {
            case 'бургери':
                return <Burgers add={add} handleMouseUp={handleMouseUp} />
            case 'закуски':
                return <Snacks add={add} handleMouseUp={handleMouseUp} />
            default: return <div>Nothing...</div>
        }
    }

    return (
        <div>{getPathMenu()}</div>
    )
}

export default Menu