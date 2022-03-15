import { createStore } from "redux";


const reducer = (state,action) => {


}



// Pour connecter les Redux Devtools on utilise
// un fonction disponible sur l'objet window
// Si cette fonction existe on l'exécute.
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// on utilise le résultat de cette fonction en parametre de createStore
const store = createStore(reducer, reduxDevtools);

export default store