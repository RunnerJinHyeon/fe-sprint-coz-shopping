import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/pages/Main";
import { useState , useEffect } from "react";
import axios from "axios";
import{Routes,Route} from "react-router-dom";

function App() {
  //서버에서 받아온 물건 리스트 담을 박스
  const [product,setProducts]=useState([]);
  



  //서버에서 물건리스트 받아오기
  useEffect(()=>{
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then(res=>{
        console.log(res.data)
        setProducts(res.data);
      }).catch(err=>{
        console.log("error",err);
      })
  },[])



  return (
    <div className="App">
      <Header />
        <Main/>
      <Footer />
    </div>
  );
}

export default App;
