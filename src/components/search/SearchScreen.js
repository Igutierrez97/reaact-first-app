import { HeroCard } from '../heroe/HeroCard'
import { useForm } from '../hooks/useForm'

import { getHeroByName } from '../../selector/getHeroByName';
 

export const SearchScreen = () => {

    

    const [ values, handleInputChange ] = useForm({
        searchText: ''
    });
    
    const { searchText } = values;

    const herosFilter = getHeroByName( searchText )
    
    
    

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form >

                        <input
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            onChange={handleInputChange}
                        />


                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {herosFilter.map(hero =>
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />

                    )}
                </div>
            </div>
        </div>
    )
}
