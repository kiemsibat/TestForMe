import React,{useState} from 'react';
import API from './components/API/API'
import Search from './components/SearchBar/Search'
const App = () => {

  const [info,setInfo] = useState('');
  const getApi = data => {
    setInfo(data)
    // console.log(info)
  }
  return(
    <div>
      {/* <h1>hello world</h1> */}
      <Search transfer={info}/>
      <API infomation={getApi}/>
    </div>
  )
}

export default App;