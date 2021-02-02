import React, {useState} from 'react';
import PirateForm from '../components/PirateForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const AddPirate = ({props}) => {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [chests, setChests] = useState('');
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/new', {
        name : name,
        imgUrl: imgUrl,
        chests: chests,
        catchPhrase: catchPhrase,
        crewPosition: crewPosition,
        pegLeg: pegLeg,
        eyePatch: eyePatch,
        hookHand: hookHand
        })
        .then(res => {console.log(res)
            navigate('/')})
        .catch(err =>{
            const errorResponse = err.response.data.errors;
            const errorArr =[];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log({err});
            console.log(errors);
    })};


    return (
        <div className='bg-color full-screen'>
            <header className='row  header-color'>
                <h1 className='mx-auto my-4 text-white'>Add a Pirate</h1>
                <button className='btn-sm btn-colors my-3 mr-3 text-white' onClick={(e) => navigate('/')}>Crew Board</button>
            </header>
            <div className='bg-color'>
                <PirateForm handleSubmit={handleSubmit} name={name} setName={setName} imgUrl={imgUrl} setImgUrl={setImgUrl}
                catchPhrase={catchPhrase} setCatchPhrase={setCatchPhrase} chests={chests} setChests={setChests} crewPosition={crewPosition}
                setCrewPosition={setCrewPosition} hookHand={hookHand} setHookHand={setHookHand} eyePatch={eyePatch} setEyePatch={setEyePatch}
                pegLeg={pegLeg} setPegLeg={setPegLeg}/>
                {errors.map((err,idx) => <p className='text-danger' key={idx}>{err}</p>)}
            </div> 
        </div>
    )
}

export default AddPirate;

