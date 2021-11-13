
const authState = {
    name: "Pasha"
  };
  const authReducer = (state = authState ,action)=>{
    switch(action.type){
      case "artir":
        return state
      default:
        return state;
    }
  }

  export default authReducer;