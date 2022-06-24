import React from 'react'
import { getHeroByPublisher } from '../../selector/getHeroByPublisher'
import { HeroCard } from './HeroCard';
import {useMemo} from 'react'


export const HeroList = ({ publisher }) => {

 const heroe = useMemo(() => getHeroByPublisher(publisher) , [publisher])  

  
  return (
    <>

      <div className='row animate__animated animate__fadeIn'>

        {heroe.map(hero => (

          <HeroCard key={hero.id}
            {...hero}
          />

        ))
        }

      </div>




    </>
  )
}
