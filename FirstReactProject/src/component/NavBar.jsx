import myImage from '../assets/reactlogo.png'

export default function NavBar(){
    return(
      <nav>
            <img src={myImage} alt="React Logo"  />
            <h1>React Facts</h1>
            <h4>React Course -Project 1 </h4>
      </nav>
    )
  }