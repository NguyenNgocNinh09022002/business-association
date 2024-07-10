import React from 'react';
import './Home.scss';
import img  from '../../asset/image/slider/slider.jpg'
function Home() {

  const synth = window.speechSynthesis;
  let text = "Hello everybody!!!!"
  const utterThis = new SpeechSynthesisUtterance(text);

  synth.speak(utterThis)


    return <div>
    <img style={{marginTop:10,width:'100%'}} src={img} alt="Logo" />
  </div>
}

export default Home;
