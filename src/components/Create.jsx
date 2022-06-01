import { useState } from "react";

function Create(setCreateData) {
  const[name, setName] = useState('');
  const [type, setType] = useState('1');
  const [place, setPlace] = useState('');  
  const handleCreate = ()=> {
    const data = {name, type, place};
    setCreateData(data);
    setName('');
    setPlace('');
    setType('1');
  }
  return (
    <>
      <div className="container">
        <h2>Create new Ex</h2>
        <div className="card-body">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            <small className="form-text text-muted">Enter Ex name here.</small>
          </div>
          <div className="form-group">
            <label>Type:</label>
            <select className="form-control" onChange={(e) => setType(e.target.value)}>
              <option value="1">Test</option>
              <option value="2">Written</option>
              <option value="3">Spoken</option>
            </select>
            <small className="form-text text-muted">Selexct Ex type</small>
          </div>
          <div className="form-group">
            <label>Place:</label>
            <input type="text" className="form-control" onChange={(e) => setPlace(e.target.value)}/>
            <small className="form-text text-muted">Enter Ex place here.</small>
          </div>
          <button type="button" onClick={handleCreate}>Submit</button>
        </div>
        </div>
    </>
  );
}

export default Create;
