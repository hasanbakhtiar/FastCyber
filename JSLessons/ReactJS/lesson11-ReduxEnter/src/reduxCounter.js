



const initialState ={
  count: 0
}




const store = createStore((state=initialState, action)=>{
        switch(action.type){

          case 'artir':
            return{
              count: state.count + 1
            }

            case 'azalt':
              return{
                count: state.count - 1
              }

              case 'reset':
                return{
                  count :0
                }
          default:
            return state
        }

})

store.subscribe(()=>{
console.log(store.getState());

})








store.dispatch({
  type: "artir"
})

// store.dispatch({
//   type: "artir"
// })

// store.dispatch({
//   type: "azalt"
// })

// store.dispatch({
//   type: "reset"
// })



















