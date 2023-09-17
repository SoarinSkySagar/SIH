import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header/>
        <div className="bg-[#C6EFF1] h-full">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
