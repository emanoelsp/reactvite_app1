import { Route, BrowserRouter, Routes } from "react-router-dom"

import Header from "./components/header"
import MainPage from "./pages/mainpage"
import ContactPage from "./pages/contactpage"
import Footer from "./components/footer"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<MainPage />}>  </Route>
            <Route path="/contatos" element={<ContactPage />}> </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
