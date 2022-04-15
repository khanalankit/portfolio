import React,{useEffect, useState} from 'react'
import Card from '../components/Card/Card';
import './My_projects.css'
import axios from 'axios';

const My_projects = () => {

    const [data,setData] = useState(null)

    async function getUser() {
        try {
          const response = await axios.get('https://api.github.com/users/darsan012/repos');
          setData(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(()=>{
        getUser();
    },[]);

  return (
    <div className='wrapper'>
      <p>Here are some of my projects.</p>
    <div className='card_container'>
      {data &&
      data.map((data,index)=>{
        return(<Card key={index} card_header = {data.name } card_body={data.description} link={data.html_url}/>)
      })
      }
    </div>
    </div>

  )
}

export default My_projects