import './Header.css'

import { useEffect } from 'react'
import { useState } from 'react'
import cartService from '../../services/cartService/cartService';
import favoriteService from '../../services/cartService/favoriteService';

export const Header = () => {

    const [ items, setItems ] = useState(cartService.getItems());
    const [ favoriteItems, setFavoriteItems ] = useState(favoriteService.getFavoriteItems());

    useEffect(() => {
        cartService.subscribe(setItems);
        favoriteService.subscribeFavoriteItems(setFavoriteItems);
    }, [])

    return (
        <header>
            <nav>
                <div className="nav-container">
                    <ul>
                        <li className='header-item'>{`Favoritos(${favoriteItems.length})`}</li>
                        <li className='header-item'>{`Carrito(${items.length})`}</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
