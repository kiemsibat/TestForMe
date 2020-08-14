import React, { useEffect, useState } from "react";
import axios from "axios";
// import Info from '../Infomation/Info'

import ListApi from './ListApi';
const API = (props) => {
  const [api, setApi] = useState([]);
  // const[id,setId] = useState('');
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setApi(res.data))
      .catch((err) => console.log("error------", err));
  }, []);

 
  return (
    <>

      {/* {console.log(api)} */}
     
        {api.map(({ id, title,body,userId }) => {
          return (
            <>
              {/* <li
           
                style={{ listStyle: "none" }}
                key={id}
              >
                {" "}
                {id} ---- {title}{" "}
              </li> */}
              <ListApi  userId={userId} id={id} title={title} body={body}/>
            </>
          );
        })}
     
    </>
  );
};

export default API;
