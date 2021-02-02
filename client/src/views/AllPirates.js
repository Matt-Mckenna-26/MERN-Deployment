import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const AllPirates = ({props}) => {
    const [pirates, setPirates] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirates/')
        .then(res => { console.log(res)
            setPirates(res.data.pirates);
            })
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <header className='row  header-color'>
                <h1 className='mx-auto my-4 text-white'>Pirate Crew</h1>
                <button className='btn-sm btn-colors my-3 mr-3 text-white' onClick={(e) => navigate('/pirate/new')}>Add  A New Pirate</button>
            </header> 
            {pirates.map((pirate, idx) => (
                <div  className = 'pirate-card mx-auto my-4' key={idx}>
                    <img className='pirate-icon mx-5 my-2' src ={pirate.imgUrl}/>
                    <h3 className ='pirate-card-header mx-3 my-2'>{pirate.name}</h3>
                    <div className='my-3'>
                        <button className= 'btn-lg btn-colors my-3 mr-3 text-white' onClick = {(e) => navigate(`/pirate/${pirate._id}`)}>View Pirate</button>
                        <DeleteButton record={pirate} records ={pirates} setRecords={setPirates}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllPirates;