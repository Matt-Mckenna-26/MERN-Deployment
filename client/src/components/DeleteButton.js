import React from 'react'
import axios from 'axios';

const DeleteButton = ({record, records, setRecords}) => {
    const removeFromDom = recordId => {
        setRecords(records.filter(record => record._id !== recordId))
    }
    const deleteRecord = (recordId) => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${recordId}`)
        .then(res => {
            removeFromDom(recordId)
        })
    }
    return(
        <>
            <button className= 'btn-lg btn-danger my-3 mr-3 text-white' onClick={(e) => {deleteRecord(record._id)}}>Walk the Plank</button>
        </>
    )
}

export default DeleteButton;