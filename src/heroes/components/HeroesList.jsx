import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 
     
    return (
        <div className='row rows-cols-1 g-3'>
           {
            heroes.map((heroe) => 
                <HeroCard 
                    key={heroe.id}
                    {...heroe }
                />
            )
           }
        </div>
    )
    }
