import React, { useState, useEffect }from 'react'
import Beer from './Beer'
import SelectCountry from './SelectCountry'
import styles from './beers.module.css'

export default function Beers() {
    const [country, setCountry] = useState('belgium')
    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    // console.log(process.env.REACT_APP_BEER_API_KEY)
    // we gebruiken useEffect om de data op te halen enkel wannneer de country veranderd ; zonder useEffect zou de data telkens opgehaald worden bij elke render
    useEffect(() => {
        // we zorgen ervoor dat de setBeers array leeg is bij aanvang, en de loading status op true staat zodat we een loading bericht kunnen tonen
        setIsLoading(true);
        setBeers([]);
        // we maken de fetch call naar de API
        const url = 'https://beers-list.p.rapidapi.com/beers/' + country;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_BEER_API_KEY,
                'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setBeers(data)
                // de loading status terug op false zetten zodat het loading bericht verdwijnt en we de data kunnen tonen
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }, [country])
    const countries = [
        {
            value : 'belgium',
            name : 'Belgium'
        },
        {
            value : 'sweden',
            name : 'Sweden'
        },
        {
            value : 'luxembourg',
            name : 'Luxembourg'
        },
        {
            value : 'czech',
            name : 'Czech'
        },
        {
            value : 'poland',
            name : 'Poland'
        }
    ]
    return (
        /* afhankelijk van de loading status, tonen we een loading bericht of de lijst met bieren */
    <div className='listing'>
        <SelectCountry countries={countries} setCountry={setCountry} country={country}/>
        <h1 className={styles.top}>
            number of beers in {country}: {beers.length}
        </h1>
        {isLoading && <p>... loading</p>}
        {!isLoading &&
            <ul>
                {beers.map((beer, i) => (
                    <Beer key={`beer-${i}`} beer={beer} />
                ))}
            </ul>
        }
    </div>
  )
}
