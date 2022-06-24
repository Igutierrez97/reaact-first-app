import React from 'react'
import { HeroList } from '../heroe/HeroList'


export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr></hr>
      <HeroList publisher='Marvel Comics'></HeroList>
     </div>
  )
}
