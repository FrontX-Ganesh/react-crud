import React, { useState } from 'react'

const ShowProducts = () => {
  const personsDetails = [
    {
      "id" : 1,
      "name": "Molecule Man",
      "age": 29,
      "identity": "Dan Jukes",
    },
    {
      "id" : 2,
      "name": "Madame Uppercut",
      "age": 39,
      "identity": "Jane Wilson",
    },
    {
      "id" : 3,
      "name": "Eternal Flame",
      "age": 10,
      "identity": "Unknown",
    },
    {
      "id" : 4,
      "name": "Ganesh Maharnur",
      "age": 50,
      "identity": "No",
    }
  ]
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [identity, setIdentity] = useState('');
  const [detailsInfo, setDetailsInfo] = useState(personsDetails);
  const [isAddButtonText, setIsAddButtonText] = useState(true);
  const [updateId, setUpdateId] = useState(0);

  const addDetails = (e) => {
    e.preventDefault();
    setIsAddButtonText(true);
    if(updateId){
      const updatedDetails = { id: updateId, name, age, identity };
      setDetailsInfo((prevDetails) =>
        prevDetails.map((details) =>
          details.id === updateId ? updatedDetails : details
        )
      );
      setUpdateId(0);
    }else{
      const newDetails = { id: Math.random(),name, age, identity }
      setDetailsInfo(prevDetails => [...prevDetails, newDetails])
    }
    setName('');
    setAge('');
    setIdentity('');
  }

  const deleteDetails = (id) => {
    const afterDelete = detailsInfo.filter((details) => details.id !== id)
    setDetailsInfo(afterDelete);
  }

  const editDetails = (id) => {
    setIsAddButtonText(false);
    const editDetail = detailsInfo.find((details) => details.id === id)
    setUpdateId(id);
    setName(editDetail.name);
    setAge(editDetail.age);
    setIdentity(editDetail.identity);
  }

  return (
    <>
      <form onSubmit={addDetails}>
        <input type="text" placeholder='Enter Name' value={name} onChange={ (e) => setName(e.target.value) } style={{ padding: '5px', border: 'none', margin: "5px" }} />
        <br />
        <input type="text" placeholder='Enter Age' value={age} onChange={ (e) => setAge(e.target.value) } style={{ padding: '5px', border: 'none', margin: "5px" }} />
        <br />
        <input type="text" placeholder='Secret Identity' value={identity} onChange={ (e) => setIdentity(e.target.value) } style={{ padding: '5px', border: 'none', margin: "5px" }} />
        <br />
        <button type='submit' style={{ margin : '5px', background: '#5555fa', color: 'white', borderRadius: '7px' }}>{isAddButtonText ? `Add Details` : `Edit Details`}</button>
      </form>
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Secret Identity</th>
                  <th>Edit</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>
            {
              detailsInfo.map( (details) =>
                <tr key={details.id}>
                    <td>{details.name}</td>
                    <td>{details.age}</td>
                    <td>{details.identity}</td>
                    <td><button style={{ margin : '5px', background: '#5555fa', color: 'white', borderRadius: '7px' }} onClick={() => editDetails(details.id)}>Edit</button></td>
                    <td><button style={{ margin : '5px', background: '#5555fa', color: 'white', borderRadius: '7px' }} onClick={() => deleteDetails(details.id)}>Delete</button></td>
                </tr>
              )
            }
          </tbody>
      </table>
    </>
  )
}

export default ShowProducts