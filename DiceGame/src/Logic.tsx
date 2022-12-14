import whitedices from "./Dices/whitedices";
import blackdices from "./Dices/blackdices";
import Input from "./input";
import {useEffect} from 'react'
import {  shuffle,replay,testing} from "./features/Manu";
import {useDispatch,useSelector} from 'react-redux'
import { BsTypeH1 } from "react-icons/bs";
const Logic = () => {
    const dispatch=useDispatch()
    const index= [0,1,2,3,4,5]
   const {Best,Roll,Dices,test,win}= useSelector((state:any)=>state.Manu)

  useEffect(() => {
 if(test) { dispatch(testing())}
  }, [test])
  

    return ( <>
   <div  className='h-[500px] w-[450px] text-center rounded-[15px] bg-white  p-3 '>
          <h1 className=" rotate-[-5deg] text-5xl  font-extrabold
           font-['Open-Sans',sans-serif] "> Tenzi !! </h1>
          <p> Chose the combination you think you'll get </p>
          <div className="mt-1 flex gap-3 flex-wrap w-[100%] justify-center" >
         { index.map(i=>{
            return <Input index={i} key={i}></Input>
         })
         }
          </div>
         
         <div className="grid gap-3 grid-cols-[100px,100px,100px] grid-rows-2 w-full justify-center my-5 ">
            {Dices.map((D:any)=>{
               return  <img src={D.img} key={Math.random()}  className='w-[75px] h-[75px] ' />
            })}
         </div>
         
        { Roll>0 && <button className=" my-2 bg-[#ca4b3a] box-border font-semibold
          px-10 py-1 text-lg text-white 
         rounded-md  " onClick={()=>dispatch(shuffle())} >Roll</button>}
         {Roll===0 && <button className=" my-2 bg-[#35a3a4] box-border 
         font-semibold px-10 py-1 text-lg text-white  rounded-md  " 
         onClick={()=>dispatch(replay())} >Restart</button>}  
         <div className="flex w-full my-2 justify-center gap-[100px] ">
            <div className="text-xl font-semibold" >  Rolls : {Roll} </div>
            <div className="text-xl font-semibold" >   Best: {Best} </div>
         </div>
 {win && <h1  className="text-7xl">  WIIIIIIIIIIIIIN </h1> }
        </div>
      
    </>
    
       
     );
}
 
export default Logic;