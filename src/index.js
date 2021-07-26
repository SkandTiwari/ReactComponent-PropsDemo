import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./component/card";
import "./index.css";



ReactDOM.render(
  <>
    <h2 className = "header">My favourite shows on NetFlix</h2>
    <Card
     imgsrc="https://baylorlariat.com/wp-content/uploads/2019/09/MV5BM2ZmYjUxZDYtMmZlMi00YjlkLTkwNTItMjcxZDRlOTI3ZTNmXkEyXkFqcGdeQXVyMTkxNjU.jpg" 
     title="The Spy" 
     discrp="In the 1960s, Israeli clerk-turned-secret agent Eli Cohen goes deep undercover inside Syria on a perilous, years-long mission to spy for Mossad." 
     link="https://www.netflix.com/in/title/80178151"
    />

    <Card
     imgsrc="https://occ-0-999-1001.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABb7ucVE6RPJJz3MalsFIDUSoO4JVVQW3Zaz1UuA9qYCjHD-mUB6EfsXYnTrkf66txY4VVvXFVTWMemEJx387IR6r4NLi.jpg" 
     title="The Imitation Game" discrp="During World War II, a mathematician leads a team of cryptanalysts as they work feverishly to break the Germans' notorious Enigma code." link="https://www.netflix.com/in/title/70295172"
    />

    <Card
     imgsrc="https://upload.wikimedia.org/wikipedia/en/3/38/Darkest_Hour_poster.png" title="Darkest Hour" 
     discrp="As the threat of Nazi invasion looms, newly appointed British Prime Minister Winston Churchill rallies a nation to fight for its very survival." link="https://www.netflix.com/fr-en/title/80189214"
    />

    <Card
     imgsrc="https://i.pinimg.com/originals/b2/99/50/b299507a2f7e80298ffebe3e2d2256b2.jpg" 
     title="Lucifier" 
     discrp="Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective." 
     link="https://www.netflix.com/in/title/80057918"
    />
  </>,
  document.getElementById('root')
);

