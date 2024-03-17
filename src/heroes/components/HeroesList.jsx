import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
     
    return (
        <div className='row rows-cols-1 g-3'>
           {
            heroes.map((heroe) => 
                <li key={heroe.id}>{heroe.superhero}</li>
            )
           }
        </div>
    )
    }
