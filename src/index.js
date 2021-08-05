import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />,
  document.getElementById('root'));


/*
class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok){
            throw new Error(`Could not fetch ${url} , recieved ${res.status}`)
        }
        const body = await res.json()
        return body

    }
    async getAllPeople(){
        const res = await this.getResource(`/people/`)
        return res.results
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`)
    }
    async getAllPlanets(){
        const res = await this.getResource(`/planets/`)
        return res.results
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}/`)
    }
    async getAllStarships(){
        const res = await this.getResource(`/starships/`)
        return res.results
    }
    getStarship(id){
        return this.getResource(`/starships/${id}/`)
    }
}

const swapi = new SwapiService()

swapi.getPerson(3).then((p) =>{
    //people.forEach((element) => {
        console.log(p.name)
  //  });
})
swapi.getPlanet(3).then((p) =>{
    //people.forEach((element) => {
        console.log(p.name)
  //  });
})
swapi.getStarship(3).then((p) =>{
    //people.forEach((element) => {
        console.log(p.name)
  //  });
})
/*.then((body)=>{
    console.log(body)
})*/
/*
const getResource = async (url) =>{
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Could not fetch ${url} , recieved ${res.status}`)
    }
    const body = await res.json()
    return body
}

getResource('https://swapi.dev/api/people/1123123/')
.then((body) =>{
    console.log(body)

})
.catch((err) => {
    console.error('could not fetch', err)
})
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
       return res.json()
    }).then((body) => {
        console.log(body)
    })*/