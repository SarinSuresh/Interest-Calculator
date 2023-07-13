import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {

  const [Principle, setPrinciple] = useState("")
  const [year, setYear] = useState("")
  const [rate, setRate] = useState("")
  const [interest, setInterest] = useState("")



  console.log(Principle,rate,year);

  const handleCalculate = (e) => {
    let ouput = Principle*year*rate/100
    console.log(ouput);
    setInterest(ouput)

   

  }

  const clear =(e) => {
    setPrinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="head">
            <h1 id='head1'>Simple Interest Calaculator</h1>
            <p>Simple Interest is an easy method of calculating the interest for a loan/principal amount. Simple interest is a concept that is used in many sectors such as banking, finance, automobile, and so on. When you make a payment for a loan, first it goes to the monthly interest and the remaining goes towards the principal amount. In this article, let us discuss the definition, simple interest formula, and how to calculate the simple interest with examples.</p>
          </div>
          <div className="card">
            <h3 className='symbol'>&#8377; {interest}</h3>
            <p id='par'>Your Total Simple Interest</p>
          </div><br />
          <div className="input">
            <TextField id="standard-basic" label="Principle Amount" variant="standard"
            onChange={e=>setPrinciple(e.target.value)} value={Principle} /> <br /><br />
            <TextField id="standard-basic" label="Rate of Interest" variant="standard"
            onChange={e=>setRate(e.target.value)} value={rate} /> <br /><br />
            <TextField id="standard-basic" label="year" variant="standard"
            onChange={e=>setYear(e.target.value)} value={year} />
          </div> <br />
          <Button id='but1' variant="outlined" onClick={handleCalculate}>Calculate</Button><br /> <br />
          <Button onClick={clear} id='but2' variant="outlined">Reset</Button>
        </div>
      </header>
    </div>
  );
  }

export default App;

