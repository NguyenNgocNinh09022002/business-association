
import axios from 'axios';
import React,{useState} from 'react'

async function getView() {
   
   
 
   


    // const data = await  axios.get('http://localhost:4000/posts')
	// .then(response => response.json())
	// .then(console.log)
    // return data;
}

  function Partners() {
    const [data,setData] = useState([])
    const promise =  fetch('http://localhost:4000/partners', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(value => value.json())
    .then(value => alert(typeof value))
    
    return (<></>)
   
}

export default Partners;
