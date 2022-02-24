import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';
import TodoList from './Component/TodoList';



interface Details {
  name: string;
  email: string;
}
// const getLocalItems = () => {
//   let details = localStorage.getItem('Details');
//   console.log(details);
// }


const App: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [detailsList, setDetailsList] = useState<Details[]>([]);
  // const [localDetails, setLocalDetails] = useState<ITask[]>([]);
  // let details = JSON.parse(localStorage.getItem("Details") || "");
  // console.log(details)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    else {
      setEmail(event.target.value);
    }
  }

  const addDetails = (): void => {
    const newDetails = { name: name, email: email, }
    setDetailsList([...detailsList, newDetails]);
    localStorage.setItem('Details', JSON.stringify(detailsList))
    setName('');
    setEmail('');
  }
  const Delete = (nameToDelete: string): void => {
    setDetailsList(detailsList.filter((detail: any) => {
      return detail.name !== nameToDelete
    })
    )
  }
  return (
    <div className="App">
      <div className="header">
        <TextField id="standard-basic"
          name='name'
          label="Name"
          value={name}
          variant="standard"
          onChange={handleChange}
        />
        <br />
        <TextField id="standard-basic"
          name='email'
          label="Email"
          value={email}
          variant="standard"
          onChange={handleChange}
        />
        <br />
        <Button sx={{
          mt: 1.5
        }} variant="contained"
          onClick={addDetails}
        >ADD</Button>
      </div>
      <div className="todoList">

        {detailsList.map((detail: Details, key: number) => {
          return <TodoList key={key} detail={detail} Delete={Delete} ></TodoList>
        })}

      </div>
    </div>
  );
}

export default App;
