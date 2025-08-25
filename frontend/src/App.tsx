import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Header from "./components/header";
import Footer from "./components/footer";

const MainPage = React.lazy(() => import("./pages/mainpage"));
const ContactPage = React.lazy(() => import("./pages/contactpage"));
const MessagePage = React.lazy(() => import("./pages/messagepage"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-gradient-to-r from-red-50 via-red-300 to-red-700 ">
        <Suspense
          fallback={<div className="min-h-screen"> Carregando ....</div>}
        >
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/contatos" element={<ContactPage />}></Route>
            <Route path="/mensagens" element={<MessagePage />}></Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
