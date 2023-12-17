import './App.css';

function App() {
  const nayoks = ['Rubel', 'Shakib', 'Zayed', 'Kuber', 'Montu', 'Riyaz']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok} </li>)
      }

      {/* {

        nayoks.map(nayok => <Person> name={nayok}</Person>)

      } */}

      <Person name={nayoks[0]} nayika = "Moushumi"> </Person>
      <Person name= {nayoks[1]} nayika = "Kulsum"> </Person>
      <Person name = {nayoks[2]} nayika = "Jobeda"> </Person>
      <h1>Yes This is a Movie Star</h1>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person (props) {

  console.log(props)

  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );

}

function Friend () {
  return (
   <div className='friend'>
      <h1>Shahrukh Khan</h1>
      <p>Profession: Actor</p>
   </div>
  )
}


export default App;
