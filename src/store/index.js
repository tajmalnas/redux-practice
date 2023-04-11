import {legacy_createStore as createStore} from 'redux';

const initialState={counter:0,showCounter:true}
const counterReducer =(state=initialState,action)=>{
    if(action.type==='INCR'){
        return{
            counter:state.counter+action.amount,
            showCounter:state.showCounter,
        }
    }
    if(action.type==='DECR'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter,
        }
    }

    if(action.type==='TOGGLE'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter,
        }
    }

    return state;
}

const store =  createStore(counterReducer);

export default store;