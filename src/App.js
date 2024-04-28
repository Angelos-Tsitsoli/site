import gini from './gini.jpg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function App() {
  const card = (
    <CardContent>
      {/* Content of the card goes here */}
     <form>
      <h1 style={{color: 'yellow'}}>Login </h1>
      <div class= "wrapper">
      <div class="input-box">
        <input type="text" name="username" placeholder="Username" required/>
      </div>
      <div class="input-box">
        <input type="text" name="password" placeholder="Password" required/>
      </div>
      </div>
     </form>
    </CardContent>
  );
  return (
    <div className="App " style={{ 
      backgroundImage: `url(${gini})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '110vh' // This makes the div take up the full height of the viewport
    }}>
      <Card id="myCard" variant="outlined" className="cardStyle">{card}</Card>
        {/* <Card variant="outlined" style = {{height: '500px', margin: 'auto', width: '400px', backgroundColor: 'transparent', border: '2px solid rgba(255, 255, 255, .2)', boxShadow: '0 0 10px rgba(0,0,0.2)'}}>{card}</Card> */}
      
    </div>
  );
}

export default App;
