import { createContext, useContext, useEffect, useReducer } from "react";

const ContextContainer = createContext();
const initialState = {
    status: "",
    products:[],
    error: "",
    cart:[],
    countPurchase:0,
}

function reducer(state, action){
    switch(action.type){
        case "products/loading":
            return {
                ...state, 
                status: "loading"
            }
        case "products/recieved": 
            return {
                ...state, 
                products: action.payload, 
                status:"ready"
            }
        case "products/rejected":
            return {
                ...state, 
                status:"error", 
                error:action.payload
            }
        case "cart/update":
            return {
                ...state, 
                cart: action.payload.cart, 
                countPurchase: action.payload.instruction.type === "increment"  ?
                state.countPurchase + action.payload.instruction.value :
                state.countPurchase - action.payload.instruction.value
            }
        default: 
             throw new Error("Unknown Action, please ensure that this action is not valid")
    }
}

function AppContext({children}){
    const [{loading, products, error, status, cart, countPurchase}, dispatch] = useReducer(reducer, initialState);

    useEffect(function(){
        (async function(){
            try{
                dispatch({type:"products/loading"})
                const response = await fetch('https://fakestoreapi.com/products');
                 
                if (!response.ok) {
                    throw new Error("🚨 Sorry, something went wrong while fetching the products. Please try again later.");
                }

                const data = await response.json();
                const clearData = data.map(product => ({...product, title: product.title.replaceAll('/', ' '), quantity: 1}));

                dispatch({type:"products/recieved", payload: clearData});

            } catch(err){
                dispatch({type: "products/rejected", payload:err.message});
            }
        })()
    }, [])

    function updateCart(cart, instruction = "pause"){
        dispatch({type:"cart/update", payload: {cart, instruction}})
    }

    return (
        <ContextContainer.Provider 
            value = {{ loading, products, error, status, cart, updateCart, countPurchase }}
        >
            {children}
        </ContextContainer.Provider>   
    )
}


function useApp(){
    const value = useContext(ContextContainer);

    if(value === undefined)
        throw new Error("Please make sure that useApp hook is inside the provider");

    return value;
}

export {AppContext, useApp} 


