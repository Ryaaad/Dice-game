import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import whitedices from "../Dices/whitedices";
import blackdices from "../Dices/blackdices";
const initialState = {
    Guess: [1,1,1,1,1,1],
    Dices:whitedices,
    Best:0,
    Roll:5,
    win:false,
    test:false
};

const ManuSlice = createSlice({
  name: 'Manu',
  initialState:initialState,
  reducers:{
    increase:(state,action:PayloadAction<number>)=>{
        if(state.Guess[action.payload]<6) ++state.Guess[action.payload]
    },
    decrease:(state,action:PayloadAction<number>)=>{
        if(state.Guess[action.payload]>1) --state.Guess[action.payload]
    },
    shuffle:(state)=>{
      for(let i=0;i<whitedices.length;i++){
        state.Dices[i]=whitedices[Math.floor(Math.random() * 5)]
      }
      state.test=true
    },
    testing:(state)=>{
      let i=0 ;
      let exist=false;

      while (i<state.Dices.length) {
        if(state.Dices[i].id!==state.Guess[i]){exist=true ; i=state.Dices.length; console.log("false"); }
    else i++;
      }
 if(exist) state.Best=state.Best 
 else state.win=true
 state.test=false

    }
  }
});

export const {increase,decrease,shuffle,testing}= ManuSlice.actions
export default ManuSlice.reducer;