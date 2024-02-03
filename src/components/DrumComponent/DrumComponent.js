import React, { useState } from 'react';
const DrumComponent = () => {
  const [encendido, setEncendido] = useState(true);
  const [tipoBanco, setBanco] = useState(true);
  const [volumen, setVolumen] = useState(100)

  //Preparamos los audios que vamos a usar

  const audios = [
    {
      key : "Q",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
    },
    {
      key : "W",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
    },
    {
      key : "E",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')
    },
    {
      key : "A",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')
    },
    {
      key : "S",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')
    },
    {
      key : "D",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
    },
    {
      key : "Z",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')
    },
    {
      key : "X",
      audioB1 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
    },
    {
      key : "C",
      audioB1 :  new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
      audioB2 : new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
    }
  ]



  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'); 
  const changeVolume = (number) => {
    console.log(audio.volume)
    audio.volume = 0.3
    setVolumen(parseFloat(number / 100));
    console.log(audio.volume)
    console.log(volumen)
  };

  const toggleEncendido = () => {
    setEncendido(!encendido);
  };

  const toggleBanco = () => {
    setBanco(!tipoBanco);
  };

  const reproducir = (key) => {
    
    audios.forEach(a => {
      if(a.key.toLowerCase() === key.toLowerCase()){
        console.log("Si")
        console.log(a.audioB1)
        audio = a.audioB1;
        audio.play();
      }
    });
    
    
  };

  document.addEventListener("keypress", (e) => {
    alert("La tecla que has pulsado es: " + e.key)
  });



  return (
    <div className="w-1/2 mx-auto bg-blue bg-white p-8 rounded shadow-md text-center">

      <h1 className="text-2xl font-bold mb-4">Control de Audio</h1>

      {/* Botón de Encender/Apagar como interruptor */}
      <button
        className={`${encendido ? 'bg-red-500' : 'bg-green-500' } text-white px-4 py-2 rounded-full mb-4`}
        onClick={toggleEncendido}
      >
        {encendido ? 'Apagar' : 'Encender'}
      </button>

      {/* Barra de Volumen */}
      <div className="mb-4">
        <label htmlFor="volume" className="block text-sm font-medium text-gray-600">Volumen</label>
        <input type="range"  id="volume" name="volume" min="0" max="100" aria-valuenow={50}   onChange={() => {changeVolume(document.getElementById("volume").value)}} className="w-full" />
      </div>

      {/* Botón para Cambiar Banco */}
      <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-black-100 mb-10">
        <span>Banco 1</span>
        <span className="relative">
          <input id="Toggle1" aria-checked= 'true' type="checkbox" className="hidden peer" onClick={() => toggleBanco} />
          <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
        </span>
        <span>Banco 2</span>
      </label>

      {/* Nueve Botones con Letras */}
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("Q")}>Q</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("W")}>W</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("E")}>E</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("A")}>A</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("S")}>S</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("D")}>D</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("Z")}>Z</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("X")}>X</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full" onClick={() => reproducir("C")}>C</button>
      </div>

    </div>
  );
};

export default DrumComponent;
