// import redux from 'redux';

const redux = require('redux')
const reduxLogger=require('redux-logger')
const createStore= redux.createStore
const combineReducers=redux.combineReducers
const logger=reduxLogger.createLogger()
const applyMiddleware=redux.applyMiddleware

const BUY_CAKE ='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyIcecream(){
    return{
        type:BUY_ICECREAM,
        info:'buy icr cream'
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams:10,
// }

const initialCakeState={
     numOfCakes: 10,
}
const initialIcecreamState= {
    numOfIcecreams: 20,
}

// const reducer = (state=initialState,action) =>{
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIcecreams:state.numOfIcecreams-1
//         }
//         default: return state
            
//     }
// }


const cakeReducer = (state=initialCakeState,action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default: return state
            
    }
}

const iceCreamreducer = (state=initialIcecreamState,action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams:state.numOfIcecreams-1
        }
        default: return state
            
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:iceCreamreducer
}
)

const store = createStore(rootReducer,applyMiddleware(logger))
const unsubscribe = store.subscribe(() => {})
console.log('initial state',store.getState())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()