import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components"
import CardButtons from "../UI/molecules/CardButtons"

const Navigator = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route 
          path="/" 
          element={ <CardButtons /> }
        />
        <Route path="/chat" element={ <h1>chat</h1> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigator
