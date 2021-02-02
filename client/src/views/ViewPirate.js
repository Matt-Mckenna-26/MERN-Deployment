import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';


const ViewPirate = (props) => {
    const [name, setName] = useState('Update name here');
    const [thisPirate, setThisPirate] = useState({})
    const [pegLeg, setPegLeg] = useState({})
    const [error, setError] = useState('');
    const {id} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then(res => {console.log(res)
            setThisPirate(res.data.pirate)}
            )
        .catch(
            err => { console.log(err)
                navigate('/error')
            })
    },[]);


    return (
        <div>
            <header className='row  header-color'>
                <h1 className='mx-auto my-4 text-white'>{thisPirate.name}</h1>
            </header>
            <div className='image-catchphrase'>
                <img src ={thisPirate.imgUrl} className='about-me-image my-5'/>
                <h2 className='about-me-catchPhrase'>{`"${thisPirate.catchPhrase}"`}</h2>
            </div>
            <div className='about-section my-5 mx-auto'>
                <h3 className ='my-5'>About</h3>
                <ul className='list-unstyled'>
                    <li className='my-3'>Position:  {thisPirate.crewPosition}</li>
                    <li className='my-3'>Treasures:  {thisPirate.chests}</li>
                    <li className='my-3'>
                        Peg Leg:  {thisPirate.pegLeg === true ? 'yes' : 'no'}
                    </li>
                    <li className='my-3'>
                        Eye Patch:  {thisPirate.eyePatch === true ? 'yes' : 'no'}
                    </li>
                    <li className='my-3'>
                        Hook Hand:  {thisPirate.hookHand === true ? 'yes' : 'no'}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ViewPirate;