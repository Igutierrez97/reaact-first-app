import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroById } from '../../selector/getHeroById'
import { createBrowserHistory } from "history";

export const HeroeScreen = () => {

  const history = createBrowserHistory({ window });

  const { heroeId } = useParams()

  const hero = getHeroById(heroeId)

  const { superhero, alter_ego, characters, publisher, first_appearance } = hero

  const handleReturn = () => {

    history.back()

  }


  return (

    <div className='row mt-5' style={{ width: 1000, marginLeft: 450 }}>
      <div className='col-4'>
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-goup-item'><b>Alter ego: </b>{alter_ego}</li>
          <hr></hr>
          <li className='list-goup-item'><b>Publisher: </b>{publisher}</li>
          <hr></hr>
          <li className='list-goup-item'><b>First Appearance: </b>{first_appearance}</li>
          <hr></hr>
          <li className='list-goup-item'><b>Characters: </b>{characters}</li>
          <hr></hr>
        </ul>

        <button className='btn btn-primary' onClick={handleReturn}>
          Return
        </button>


      </div>



    </div>
  )
}
