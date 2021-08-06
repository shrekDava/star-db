import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorButton from "../error-button/error-button";

const Record = ({item , field, label}) =>{
  return (
            <li className="list-group-item">
              <span className="term"> {label}</span>
              <span> {item[field]}</span>
          </li>
          )
}
export {
  Record
}

export default class ItemDetails extends Component {
  
  swapiService = new SwapiService()
  state = {
    item: {},
    loading: true,
    image: null
  }

  componentDidMount(){
    this.updateItem()
  }
  updateItem (){
    const {itemId , getData , getImageUrl} = this.props
    if(!itemId){
      return
    }
    
    getData(itemId)
                      .then((item) =>{                        
                        this.setState({
                          item, 
                          loading: false,
                          image: getImageUrl(item)
                        }) 
                      })
   
  }
  componentDidUpdate(prevProps){
      if(this.props.itemId !== prevProps.itemId){
        this.updateItem()
      }
  }
  /*componentDidUpdate(nextProps){
    if(this.props.personId !== prevProps.personId){
      this.updateitem()
    }
}*/
render() {

  const { item, image } = this.state;
  if (!item) {
    return <span>Select a item from a list</span>;
  }

  const { id, name, gender,
            birthYear, eyeColor } = item;

  return (
    <div className="item-details card">
      <img className="item-image"
        src={image}
        alt="item"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child,{ item })

            })
            }
        </ul>
        <ErrorButton />
      </div>
    </div>
  );
}
}

/*const ItemView = ({item, image}) => {
  const {id,name,gender, birthYear, eyeColor} = item
  //const {image} = image
  return (
   <React.Fragment>
  <img className="person-image" 
        //src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="error icon"/>
        src={image} alt="error icon"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">

            {this.props.children}

          </ul>
          <ErrorButton />
        </div>
   </React.Fragment>
   )
}*/

/*<li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>*/