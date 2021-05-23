import React from 'react'
import './App.module.css';
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "@apollo/client"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Auth from "./components/Auth"
import MainPage from "./components/MainPage"

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  headers: {
    authorization: localStorage.getItem("token")
      ? `JWT ${localStorage.getItem("token")}`
      : "",
  },
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
