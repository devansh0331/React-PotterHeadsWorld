import React , {useState , useEffect} from 'react'
import "./Home.css"
import Navbar from '../navbar/Navbar'
import Card from '../card/Card'


function Home() {

    const [clicked , setClicked] = useState(false)
    const [isBlur , setIsBlur] = useState(false)
    const [charactersFinal , setCharactersFinal] = useState([])
    const [iD , setID] = useState('')
    const [indiImage , setIndiImage] = useState('')
    const [name , setName] = useState('')
    const [species , setSpecies] = useState('')
    const [gender , setGender] = useState('')
    const [house , setHouse] = useState('')
    const [dateOfBirth , setDateOfBirth] = useState('')
    const [ancestry , setAncestry] = useState('')
    const [eyeColour , setEyeColour] = useState('')
    const [hairColour , setHairColour] = useState('')
    const [patronus , setPatronus] = useState('')
    const [actor , setActor] = useState('')
    const [indiCharacter , setIndiCharacter] = useState([])
    const [searchVal, setSearchVal] = useState('')


    const charactersURL = "https://hp-api.onrender.com/api/characters"
    const indiCharacterURL = `https://hp-api.onrender.com/api/character/${iD}`

    const getCharacters = async () =>{
        const charactersResponse = await fetch(charactersURL)
        const characters = await charactersResponse.json()
        console.log(characters);
        setCharactersFinal(characters)
 
   }

   const getIndiCharacter = async () => {
    const indiCharacterResponse = await fetch(indiCharacterURL)
    const character = await indiCharacterResponse.json()
    console.log(character);
    setCharactersFinal(character)
   }

    useEffect(() => {
        getCharacters();
        
    },[])


    const capitalizeFirstLetter = (inputString) => {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
      };


    const data = [
        ['Row 1, Column 1', 'Row 1, Column 2'],
        ['Row 2, Column 1', 'Row 2, Column 2'],
        ['Row 3, Column 1', 'Row 3, Column 2'],
        ['Row 4, Column 1', 'Row 4, Column 2'],
        ['Row 5, Column 1', 'Row 5, Column 2']
      ];

     
      
      const HandleOnClick =  (e) => {
            setIsBlur(!isBlur)
            setID(e.item.id)
            console.log(e.item.id);
           
                // const indiCharacterResponse = await fetch(indiCharacterURL)
                // const character = await indiCharacterResponse.json()
                // console.log(character);
                // setIndiCharacter(character)
          
            
      }
  return (
    <>
    {!isBlur && <div className='home'>
        <Navbar/>
        <input className="search" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder="Search any character" />
        <div className="row my-5 g-5">
            {charactersFinal && charactersFinal.filter((val) => {
                if(searchVal === ''){
                    return val
                }
                else if(val.name.toLowerCase().includes(searchVal.toLowerCase())){
                    return searchVal
                }
            }
                )
            .map((item,key) => {
                return <div key={key} onClick={() => {
                    setIsBlur(!isBlur)
                    console.log(item.id);
                    console.log( item.name);
                    setIndiImage(item.image)
                    setName(item.name)
                    setSpecies( item.species)
                    setGender(item.gender)
                    setHouse(item.house)
                    setDateOfBirth(item.dateOfBirth)
                    setEyeColour(item.eyeColour)
                    setHairColour(item.hairColour)
                    setAncestry(item.ancestry)
                    setPatronus(item.patronus)
                    setActor(item.actor)

                }} className="col-3">    
                    <Card image={item.image}  name={item.name}/>
                </div>
            })}
          



            
            

        </div>
    </div>}
    {isBlur &&  <> 
    <div className=' homeBlur home'>
        <Navbar/>
        <div className="row my-5 g-5">

<div className="row my-5 g-5">
            {charactersFinal && charactersFinal.map((item,key) => {
                return <div key={key} onClick={HandleOnClick}  className="col-3">    
                    <Card image={item.image}  name={item.name}/>
                </div>
            })}
          

</div>



    </div>
    </div>
    
    
    
    {indiCharacter &&  <div className="coverPage makeflex">
          
            
                    <div>
            <img onClick={() => {setIsBlur(!isBlur)}} className={!indiImage ? "imgNull" : ""} src={indiImage} alt=""/> 
        </div>
        <div className="content">
            <span className="title">{name}</span>
            <table>
                <tr>
                    <td>Species :</td>
                    <td><strong>{capitalizeFirstLetter(species)}</strong> </td>
                </tr>    
                <tr>
                    <td>Gender :</td>
                    <td><strong>{capitalizeFirstLetter(gender)}</strong></td>
                </tr>    
                <tr>
                    <td>House :</td>
                    <td><strong>{house}</strong></td>
                </tr>    
                <tr>
                    <td>Date of Birth :</td>
                    <td><strong>{dateOfBirth}</strong></td>
                </tr>    
                <tr>
                    <td>Ancestry :</td>
                    <td><strong>{capitalizeFirstLetter(ancestry)}</strong></td>
                </tr>    
                <tr>
                    <td>Eye Colour :</td>
                    <td><strong>{capitalizeFirstLetter(eyeColour)}</strong></td>
                </tr>    
                <tr>
                    <td>Hair Colour :</td>
                    <td><strong>{capitalizeFirstLetter(hairColour)}</strong></td>
                </tr>    
                <tr>
                    <td>Actor :</td>
                    <td><strong>{actor}</strong></td>
                </tr>    
            <tr> <td><button onClick={() => {setIsBlur(!isBlur)}}>	&lt;&lt; Back to Home Page </button></td></tr>    
            </table>
        </div>
            
          
        

    </div>} </>}

    </>
  )
}

export default Home
