import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [datas, setDatas] = useState([]);
  const [ids, setIds] = useState('');
  const [tog, setTog] = useState(false);

  const submit = () => {
    setDatas([...datas, { name, job }]);
    console.log(datas);
    setName("");

    setJob("");
  }
  const fEdit = () => {
    if (tog === false)
    {
      let data = { name, job };
      setDatas(data);
     
      
    } else {
     
      datas[ids].name = name;
      datas[ids].job = job;
      setName("");
      setJob("");

      console.log("editdata", datas);
      setTog(false);
    }
  }
  const removeItem = (id) => {
    let data = datas.filter((item, i) => {
      if (i !== id)
      {
        return item;
        }

    });
    setDatas(data)
  }

  const editItem = (id) => {
    const data = datas.find((dt,i) => i === id)
    setName(data.name);
    setJob(data.job);
    setIds(id);
    setTog(true);
    
  }

  return (
    <div className="App">
      <h1>Crud Opration</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" value={job} onChange={e => setJob(e.target.value)} />
       {tog ? <button onClick={()=>fEdit()}>Edit</button> : <button onClick={()=>submit()}>clickme</button>}
      {
        datas.map((data, i) => {
          return (
            < div key = { i } >
            <h3>{i}</h3>
            <h3>{data.name}</h3>
            <h3>{data.job}</h3>
              <button onClick={() => removeItem(i)}>Remove</button>
              <button onClick={()=>editItem(i)}>edit</button>
          </div>)
        })
      }
      <div>
        
      </div>
    </div>
  );
}

export default App;
