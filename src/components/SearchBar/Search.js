import React,{useState,useEffect} from 'react';

const Search = (props) => {
    const[api,setApi] = useState([]);
    const[change,setChange] = useState('');
    // const[filteredCountry,setFilteredCountry] = useState([])

    const onHandleChange = e => {
        setChange(e.target.value);
        console.log(e.target.value)
    }
    
    useEffect(() =>{
        setApi(props.transfer)
        console.log('helo-------------------it me',api);
    },[api,props.transfer])
    // useEffect(() => {
    //     setFilteredCountry(
    //         api.filter(country =>
    //           country.name.toLowerCase().includes(change.toLowerCase())
    //         )
    //       );
    // },[change,api])
    return(
        <>     
            {/* {console.log('--------------inforhere',setApi)} */}
            <input type="text" value={change} onChange={onHandleChange}></input>
            <ul>
            {api}
    
            </ul>
           
        </>
    )
}

export default Search;