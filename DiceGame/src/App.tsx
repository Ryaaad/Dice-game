
import Logic from "./Logic"
import Bg from './assets/Bg.jpg'
function App() {
 

  return (
    <div  style={{ "backgroundImage": `url(${Bg})`}} 
    className="h-[100vh] grid justify-center items-center bg-cover bg-center ">
     <Logic></Logic>
    </div>
  )
}

export default App
