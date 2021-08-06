import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import './app.css';
import ErrorBoundry from '../error-boundry';
import Row from '../row';


import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import{
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'


export default class App extends Component {
  swapiService = new SwapiService()
  dummySwapiService = new DummySwapiService()
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };
  componentDidCatch = () => {
    this.setState({hasError: true})
  }
  

  render() {
    if(this.state.hasError){
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
     /* const {
        getPerson, 
        getStarship,
        getPersonImage,
        getStarshipImage  
      } = this.swapiService*/

      const {
        getPerson, 
        getStarship,
        getPersonImage,
        getStarshipImage,
        getAllStarships,
        getAllPeople
      } = this.dummySwapiService

      const personDetails = (
        <ItemDetails itemId ={11}
        getData ={getPerson}
        getImageUrl={getPersonImage}

        >
          <Record field="gender" label ="Gender" />
            <Record field="eyeColor" label ="Eye Color" />
        </ItemDetails>
      )
      const starshipDetails = (
        <ItemDetails 
        itemId ={5}
        getData ={getStarship}
        getImageUrl={getStarshipImage}>
            <Record field="model" label ="Model" />
            <Record field="length" label ="Length" />
            <Record field="costInCredits" label ="Cost" />

        </ItemDetails>
      )
      return (
        <ErrorBoundry>
          <div className="stardb-app">
            <Header/>
            <Row
              left={personDetails}
            right={starshipDetails}
            />
          </div>
          <PersonDetails itemId = {11}></PersonDetails>
          <PlanetDetails itemId = {3}></PlanetDetails>
          <StarshipDetails itemId = {8}></StarshipDetails>

          <PersonList/>
          
          <StarshipList/>
          
          <PlanetList/>
          
        </ErrorBoundry>
      )
    /*return (
      <div className="stardb-app">
        <Header />
        { planet }
      <div className="row mb2 button-row">
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />

        </div>
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              getData ={this.swapiService.getAllPlanets}
              //renderItem = {(item) => ( <span> {item.name}<button>!</button></span> )}
              onItemSelected={this.onPersonSelected}>

                {(item) => ( <span> {item.name}<button>!</button></span> )}
              </ItemList>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              getData ={this.swapiService.getAllStarships}
              //renderItem = {(item) => item.name}
              onItemSelected={this.onPersonSelected}>
                {(item) => item.name}
              </ItemList>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

      </div>
    );*/

    /* test comit */
  }
}
