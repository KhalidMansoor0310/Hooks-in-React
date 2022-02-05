import { useReducer } from "react";

const countReducer = (state,action) => {
    if(action.type === "INCREMENT"){
        return {
                count:state.count+1
                }
    }
    else if(action.type === "DECREMENT"){
        return {
                count:state.count-1
            }
    }
    else if(action.type === "NAMEPRINT"){
        return state.name = "john cena"
    }
}

function UseReducer() {
    // count is 0 which is in state and through dispatch we can modify the state
    // value and useReducer call a function that takes two arguments one is state
    // and the other is action but remember that anything return by the countReducer
    // can be setted by useReducer as state value
    const [state,dispatch] = useReducer(countReducer,{count:0 , name:"khalid"})
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-primary my-3 mr-3"
                            onClick={() => {
                                dispatch({ type: "INCREMENT" });
                            }}
                        >ADD</button>

                        <button className="btn btn-primary my-3"
                            onClick={() => {
                                dispatch({ type: "DECREMENT" });
                            }}
                        >Subtract</button>
                        <button className="btn btn-primary my-3"
                            onClick={() => {
                                dispatch({ type: "NAMEPRINT" });
                            }}
                        >Name</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseReducer;
