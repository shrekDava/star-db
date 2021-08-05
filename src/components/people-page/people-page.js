import React, { Component } from 'react';

import './people-page.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import ErrorBoundry from '../error-boundry';


import Row from '../row';



export default class PeoplePage extends Component {
  swapiService = new SwapiService()
  
  state = {
    selectedPerson: 3
    }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  
  render() {
    if(this.state.hasError){
      return <ErrorIndicator />
    }
    const itemList = (
        <ItemList 
        getData ={this.swapiService.getAllPeople}
        
        onItemSelected={this.onPersonSelected}        >
          {(i) => (          
            `${i.name} (${i.birthYear})`
          )}
          </ItemList>
    )
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>

    )
    return (
        <Row left={itemList} right ={personDetails}/>
      )
  }
}
