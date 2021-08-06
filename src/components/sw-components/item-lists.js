import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

const swapiService = new SwapiService();
const dummySwapiService = new DummySwapiService();
/*
const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;*/
const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = dummySwapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};
/*
const ListWithCildren = withChildFunction(
  ItemList,
  ({ name }) => <span>{name}</span>
)

}*/
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const PersonList = withData(
                      withChildFunction(ItemList, renderName),
                      getAllPeople);

const PlanetList = withData(
                      withChildFunction(ItemList, renderName),
                      getAllPlanets);

const StarshipList = withData(
                      withChildFunction(ItemList, renderModelAndName),
                      getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
