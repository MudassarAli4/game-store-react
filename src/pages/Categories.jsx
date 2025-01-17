import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import filterListData from '../data/filterListData';
import './categories.css';

function Categories({ games, reference }) {
    const [text, setText] = useState('');
    const [data, setData] = useState(games);
    const [filters, setFilters] = useState(filterListData);

    const handleFilterGames = category => {
        setFilters(
            filters.map(filter => {
                filter.active = false;
                if (filter.name === category) {
                    filter.active = true;
                }
                return filter;
            })
        );

        if(category === 'All'){
            setData(games);
            return;
        }

        setData(games.filter(game=> game.category===category))
    };

    const handleSearchGames = e => {
        setData(
            games.filter(game =>
                    game.title.toLowerCase().includes(e.target.value.toLowerCase())
                )
        )
        setText(e.target.value);
    };

    // const fetchData = ()=>{
    //     fetch("http://localhost:3000/api/gamesData.json")
    //     .then(res=>res.json())
    //     .then(data => {
    //         setData(data);
    //     })
    //     .catch(e => console.log(e.message));
    // };

    // useEffect(()=>{
    //     fetchData();
    // }, []);


    return (
        <section id="categories" className="categories" ref={reference}>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-lg-8 d-flex align-items-center justify-content-start">
                        <ul className="filters">
                            {filters.map(filter => (
                                <li 
                                    key={filter._id} 
                                    className={`${filter.active ? 'active' : ''}`}
                                    onClick={() => handleFilterGames(filter.name)}
                                >
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-start">
                        <div className="search">
                            <i className="bi bi-search"></i>
                            <input 
                                type="text" 
                                name="search" 
                                value={text}
                                placeholder="Search" 
                                onChange={handleSearchGames}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map(game=>(
                        <GameCard key={game._id} game={game}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories;
