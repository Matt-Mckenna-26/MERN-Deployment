import React, {useState} from 'react';
import {navigate} from '@reach/router';

const PirateForm = ({handleSubmit ,name ,setName ,imgUrl, setImgUrl,
    catchPhrase, setCatchPhrase, chests, setChests, crewPosition,
    setCrewPosition, hookHand, setHookHand, eyePatch, setEyePatch,
    pegLeg, setPegLeg}) => {
    return (
        <form className='form-group'>
            <div className='bg-color form-grouping'>
                <div>
                    <label className='text-white' htmlFor='name'>Name: </label>
                    <input className='form-control col-6 mx-auto my-4' type='text' value = {name} onChange={(e)=> setName(e.target.value)}/>
                    <p className='text-danger'>{name.length < 3 ? 'Name must be at least 3 character!' : null }</p>
                </div>
                <div>
                    <lable className='text-white' htmlFor='imgUrl'>Image Url: </lable>
                    <input className='form-control col-6 mx-auto my-4' type='text' value = {imgUrl} onChange={(e)=> setImgUrl(e.target.value)}/>
                    <p className='text-danger'>{imgUrl.length < 1 ? 'An Image is required!' : null }</p>
                </div>
                <div>
                    <lable className='text-white' htmlFor='chests'># of Treasure Chests: </lable>
                    <select class="form-control col-6 mx-auto my-4" value={chests} onChange = {(e) => setChests(e.target.value)}>
                        <option selected></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                    <p className='text-danger'>{chests.length < 1 ? 'A Pirate needs treasure!' : null }</p>
                </div>
                <div>
                    <lable className='text-white' htmlFor='catchPhrase'>Pirate Catch Phrase: </lable>
                    <input className='form-control col-6 mx-auto my-4' type='text' value = {catchPhrase} onChange={(e)=> setCatchPhrase(e.target.value)}/>
                    <p className='text-danger'>{catchPhrase.length < 5 ? 'A Pirates catchphrase must be at least 5 chars' : null }</p>
                </div>
            </div>
            <div className='bg-color form-grouping'>
                <div>
                    <lable className='text-white' htmlFor='crewPosition'>Crew Position: </lable>
                    <select class="form-control col-6 mx-auto my-5" value={crewPosition} onChange = {(e) => setCrewPosition(e.target.value)}>
                        <option selected></option>
                        <option value='Captain'>Captain</option>
                        <option value='First Mate'>First Mate</option>
                        <option value='Quarter Master'>Quarter Master</option>
                        <option value='Boat Swain'>Boat Swain</option>
                        <option value='Powder Monkey'>Powder Monkey</option>
                    </select>
                    <p className='text-danger'>{crewPosition.length < 1 ? 'A crew position is required, please pick one Argh!' : null }</p>
                </div>
                <div className='my-2'>
                    <input class="form-check-input" type="checkbox" defaultChecked onChange={(e)=> pegLeg === true ? setPegLeg(false) : setPegLeg(true) }/>
                    <label className='text-white' class="form-check-label" for="pegLeg">
                        Peg Leg
                    </label>
                </div>
                <div className='my-2'>
                    <input class="form-check-input " type="checkbox"  defaultChecked onChange={(e)=> eyePatch === true ? setEyePatch(false) : setEyePatch(true) }/>
                    <label className='text-white' class="form-check-label" for="eyePatch">
                        Eye Patch
                    </label>
                </div>
                <div className='my-2'>
                    <input class="form-check-input " type="checkbox"  defaultChecked onChange={(e)=> hookHand === true ? setHookHand(false): setHookHand(true)}/>
                    <label className='text-white' class="form-check-label" for="hookHand">
                        Hook Hand
                    </label>
                </div>
                <button className='text-white' className='btn-sm btn-colors my-3 mr-3 text-white' onClick = {handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default PirateForm;