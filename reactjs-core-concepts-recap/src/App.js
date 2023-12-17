import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="NoaKhali" specialty="Bibhag"></District>
      <District name="Chittagong" specialty="Mezban"></District>
      <District name="Dhaka" specialty="GoldDigger"></District>
    </div>
  );
}

function LoadPosts () {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Posts: {posts.length} </h1>
      {
        posts.map (post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post (props) {
  return (
    <div style={{backgroundColor: 'lightsalmon', margin: '20px', padding: '15px', border: '2px solid blue',}}>
      <h1>Title: {props.title}</h1>
      <p>Body: {props.body}</p>
    </div>
  )
}

function District (props) {
   
  const [power, setPower] = useState(1)

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  return (
    <div className='district'>
      <h1>Name: {props.name} </h1>
      <p>Specialty: {props.specialty} </p>
      <h1>Power: {power}</h1>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;
