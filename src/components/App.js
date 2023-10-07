import {useState, useEffect} from 'react'

const App = () => {
    const [dogImg, setDogImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setDogImg(data.message))
        .catch(err => alert(err))
    }, [])

    if(!dogImg) {
        return <p>Loading...</p>
    }

    return (
        <img src={dogImg} alt="A Random Dog" />
    )
}

export default App