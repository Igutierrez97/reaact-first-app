import React from 'react';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';
import { DCScreen } from '../components/dc/DCScreen';
import { HeroeScreen } from '../components/heroe/HeroeScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DasboardRoute } from './DasboardRoute';





export const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
    
        <Routes>
          <Route exact path='/login' element={<LoginScreen />}/>

          <Route exact path='/' element={<DasboardRoute/>}>

            <Route exact path='/dc' element={<DCScreen />}/>

            <Route exact path='/marvel' element={<MarvelScreen />}/>

            <Route exact path='/search' element={<SearchScreen />}/>
            
            <Route  exact path='/heroe/:heroeId' element={<HeroeScreen />}/>

          </Route>

          <Route path='*' element={<h1>Not Found</h1>}/>

        </Routes>

      


    </div>
    </BrowserRouter>
  )
}
