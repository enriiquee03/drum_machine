import React, { useState } from 'react';
const DrumComponent = () => {
  const [encendido, setEncendido] = useState(true);
  const [tipoBanco, setBanco] = useState(true);




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

  const toggleEncendido = () => {
    setEncendido(!encendido);
  };

  const toggleBanco = () => {
    setBanco(!tipoBanco);
    console.log(tipoBanco)
  };


  const reproducir = (key) => {
    audios.forEach(a => {
      if(a.key.toLowerCase() === key.toLowerCase() && encendido && tipoBanco){
        let audioVolume = document.getElementById("volume").value
        let audio = a.audioB1;
        audio.volume = (audioVolume/100)
        audio.play()
      }else if(a.key.toLowerCase() === key.toLowerCase() && encendido && !tipoBanco){
        let audioVolume = document.getElementById("volume").value
        let audio = a.audioB2;
        audio.volume = (audioVolume/100)
        audio.play();
      }
    });
    
    
  };

  document.addEventListener("keypress", (e) => {
    reproducir(e.key)
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
        <input type="range"  id="volume" name="volume" min="0" max="100" aria-valuenow={50}   className="w-full" />
      </div>

      {/* Botón para Cambiar Banco */}
      <div className='flex justify-center mb-4'>
        <p className='mr-3'>Banco 1</p> 
        <input
          className=" bg-green-500 ml-[0.15rem] mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-500  checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={toggleBanco}
        />
          <p className='ml-3'>Banco 2</p> 
      </div>


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
