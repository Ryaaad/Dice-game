import {useDispatch,useSelector} from 'react-redux'
import { BsCaretDown,BsCaretUp } from "react-icons/bs";
import {increase,decrease} from './features/Manu';

interface props{
    index:number
}
const Input:React.FC<props> = (props) => {
    const dispatch=useDispatch()
    const  {Guess}= useSelector((state:any)=>state.Manu)
    return (     
         <div >
        <BsCaretUp className='cursor-pointer' onClick={()=>dispatch(increase(props.index))} ></BsCaretUp>
        <input type="text" className="w-[30px] translate-x-[-20%] text-center 
         h-[30px]" disabled 
        value={Guess[props.index]} />
        <BsCaretDown className='cursor-pointer'  onClick={()=>dispatch(decrease(props.index))} ></BsCaretDown>
        </div> );
}
 
export default Input;