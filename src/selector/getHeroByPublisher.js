import { heroes } from "../Data/heroes";



export const getHeroByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (validPublisher.includes(publisher)) {
        
      return  heroes.filter(hero => hero.publisher === publisher)

    } else
    throw new Error(`Publisher"${publisher}" no es correcto`)
}

