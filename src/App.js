
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home"
import Fleurs from "./pages/Fleurs"
import Bouquets from "./pages/Bouquets"
import MonCompte from "./pages/MonCompte" 
import Menu from "./Component/Menu";
import { HttpClient } from '@angular/common/http';
import image1 from './images/pq1.jpg';
import image2 from './images/pq2.jpg';
import image3 from './images/pq4.jpg';
import image4 from './images/poquet2.jpg';


// Nouveau composant BouquetsApi
//function BouquetsApi({ setBouquets }) {
 

  //return null; // personnaliser le retour si nécessaire
//}
//function setBouquets(p){
  //mesBouquets=p;
//}

function App() {
  
  let mesBouquets=[
    {id: "1",nom: "Bouquet 1", descr: "Description", image: image1, prix: "50$", liked: false},
    {id: "2",nom: "Bouquet 2", descr: "Description", image: image2, prix: "60$", liked: false},
    {id: "3",nom: "Bouquet 3", descr: "Description", image: image3, prix: "50$", liked: false},
    {id: "4",nom: "Bouquet 4", descr: "Description", image: image4, prix: "50$", liked: false},

   
  ];
    //useEffect(() => {
      // Effectuer une requête API pour récupérer les données des bouquets
      //fetch("/api/bouquet")
        //.then(response => response.json())
        //.then(data => setBouquets(data))
        //.catch(error => console.error("Erreur lors de la récupération des bouquets :", error));
    //}, //[setBouquets]);

  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bouquets" element={<Bouquets Bouquet={mesBouquets}/>}/>
        <Route path="/fleurs" element={<Fleurs/>}/>
        <Route path="/compte" element={<MonCompte/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );//Bouquet c une varaiable qui passe en parametre mesBouqets ou on a déclarer les information a afficher
}

export default App;
