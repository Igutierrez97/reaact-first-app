import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({ id, superhero, alter_ego, characters, first_appearance }) => {
    

    

    return (
        <div className="card mb-3" style={{ maxWidth: 450, margin: 30 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={superhero}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        {
                            (alter_ego !== characters)
                            && <p className="card-text"><small className="text-muted">{characters}</small></p>
                        }

                       <Link to={`/heroe/${id}`}>
                            Mas...
                         </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
