let lista = document.getElementById('lista');
let pri=document.getElementById('primera');let ultima=document.getElementById('ultima');
let sig=document.getElementById('sig');let ant=document.getElementById('ant');
let pagg=document.getElementById('pagg');
let nroP = document.getElementById('nroPersonajes');
let pagina=1;
let personajesListados = 20;
pagg.innerText = `${pagina}`;
nroP.innerText =personajesListados;
let mujerBuscar= false;
let hombreBuscar=false

if(pagina===1){
  ant.style.display = 'none';
  pri.style.display = 'none';
}
const MiAPi = async (pagina)=>
{lista.innerHTML ="";

  let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
  const api = await fetch(url);
  const datos=await api.json(); 
   mostrar(datos.results);
}


const mostrar = (arreglo)=> {
  arreglo.forEach(personaje=>{
    tarjeta= document.createElement('div') ;
    tarjeta.innerHTML =`
    
    <div class = container>
<div class = card>
  <div class = image>
    <img src="${personaje.image}" alt="${personaje.name}">
  </div>
  <div class = content>
  <p> Personaje: ${personaje.name} </p>
  <p >Género: ${personaje.gender} </p>
  <p >Especie: ${personaje.species} </p>
  <p >Estado: ${personaje.status} </p>
  <p >Origen: ${JSON.stringify(personaje.origin.name)} </p>
  <p >Lugar: ${JSON.stringify(personaje.location.name)} </p>  </div>
</div> </div>
    
    
    

`
lista.append(tarjeta);
personajesListados=arreglo.length;
nroP.innerText =personajesListados;
})}
 
MiAPi(pagina);



sig.addEventListener('click',() => {
  pagina++;
  if(mujerBuscar) {
    const paginaMujer = async(pagina)=>{
    lista.innerHTML ="";
    let url = `https://rickandmortyapi.com/api/character/?gender=Female&page=${pagina}`;
    const api = await fetch(url);
    const datos=await api.json(); 
    pagg.innerText = `${pagina}`;
     mostrar(datos.results);}
      paginaMujer(pagina);
  }
  else if(hombreBuscar){
    const paginaHombre = async(pagina)=>{
    lista.innerHTML ="";
    let url = `https://rickandmortyapi.com/api/character/?gender=Male&page=${pagina}`;
    const api = await fetch(url);
    const datos=await api.json(); 
    pagg.innerText = `${pagina}`;
     mostrar(datos.results);}
      paginaHombre(pagina);}

  else{pagg.innerText = `${pagina}`;
  MiAPi(pagina);mujerBuscar=false;hombreBuscar=false;
}

 
if(pagina===42){
  sig.style.display = 'none';
  ultima.style.display = 'none';
}
if(pagina>1){
  ant.style.display = 'inline-block';
  pri.style.display = 'inline-block';
}
})

ultima.addEventListener('click',() => {

  if(mujerBuscar) {
pagina=8; 
//honestamente intenté de muchas formas acceder a info/pages pero no me salía asi que lo ejecuté aparte y me anoté el total de páginas de personajes mujeres
const paginaMujer = async(pagina)=>{
  lista.innerHTML ="";
  let url = `https://rickandmortyapi.com/api/character/?gender=Female&page=${pagina}`;
  const api = await fetch(url);
  const datos=await api.json(); 
  pagg.innerText = `${pagina}`;
   mostrar(datos.results);}
    paginaMujer(pagina);      
  }
else if(hombreBuscar){
pagina=31;
//honestamente intenté de muchas formas acceder a info/pages pero no me salía asi que lo ejecuté aparte y me anoté el total de páginas de personajes varones

const paginaHombre = async(pagina)=>{
  lista.innerHTML ="";
  let url = `https://rickandmortyapi.com/api/character/?gender=Male&page=${pagina}`;
  const api = await fetch(url);
  const datos=await api.json(); 
  pagg.innerText = `${pagina}`;
   mostrar(datos.results);}
   paginaHombre(pagina);

}

else{pagina=42;
   pagg.innerText = `${pagina}`;
  MiAPi(pagina);mujerBuscar=false;hombreBuscar=false;

}

  sig.style.display = 'none';
  ultima.style.display = 'none';
  ant.style.display = 'inline-block';
  pri.style.display = 'inline-block';
})

pri.addEventListener('click',() => {
  pagina=1;
  if(mujerBuscar) {
    const paginaMujer = async(pagina)=>{
    lista.innerHTML ="";
    let url = `https://rickandmortyapi.com/api/character/?gender=Female&page=${pagina}`;
    const api = await fetch(url);
    const datos=await api.json(); 
    pagg.innerText = `${pagina}`;
     mostrar(datos.results);}
      paginaMujer(pagina);
  }
else if(hombreBuscar){
    const paginaHombre = async(pagina)=>{
    lista.innerHTML ="";
    let url = `https://rickandmortyapi.com/api/character/?gender=Male&page=${pagina}`;
    const api = await fetch(url);
    const datos=await api.json(); 
    pagg.innerText = `${pagina}`;
     mostrar(datos.results);}
     paginaHombre(pagina);}
  else{pagg.innerText = `${pagina}`;
  MiAPi(pagina);mujerBuscar=false;hombreBuscar=false;
}
  ant.style.display = 'none';
  pri.style.display = 'none';
  sig.style.display = 'inline-block';
  ultima.style.display = 'inline-block';
})


ant.addEventListener('click',() => {
pagina--;
if(mujerBuscar) {
    const paginaMujer = async(pagina)=>{
    lista.innerHTML ="";
    let url = `https://rickandmortyapi.com/api/character/?gender=Female&page=${pagina}`;
    const api = await fetch(url);
    const datos=await api.json(); 
    pagg.innerText = `${pagina}`;
     mostrar(datos.results);}
      paginaMujer(pagina);
  }
else if(hombreBuscar){
    const paginaHombre = async(pagina)=>{
    lista.innerHTML ="";
    let url = `https://rickandmortyapi.com/api/character/?gender=Male&page=${pagina}`;
    const api = await fetch(url);
    const datos=await api.json(); 
    pagg.innerText = `${pagina}`;
     mostrar(datos.results);}
     paginaHombre(pagina);}
  else{pagg.innerText = `${pagina}`;
  MiAPi(pagina);mujerBuscar=false;hombreBuscar=false;
}

if(pagina===1){
    ant.style.display = 'none';
    pri.style.display = 'none';
  }
if(pagina<42){
    sig.style.display = 'inline-block';
    ultima.style.display = 'inline-block';
  }
})

let mujer = document.getElementById('mujer');
mujer.addEventListener('click',async()  => {
  lista.innerHTML ="";
  let url = `https://rickandmortyapi.com/api/character?gender=Female`;
  const api = await fetch(url);
  const datos=await api.json(); 
   mostrar(datos.results);
   pagina=1;pagg.innerText = `${pagina}`;
   ant.style.display = 'inline-block';
  pri.style.display = 'inline-block';
  sig.style.display = 'inline-block';
  ultima.style.display = 'inline-block';
   mujerBuscar=true;
   hombreBuscar=false;
})

let hombre = document.getElementById('Hombre');
hombre.addEventListener('click',async()  => {
  lista.innerHTML ="";
  let url = `https://rickandmortyapi.com/api/character?gender=Male`;
  const api = await fetch(url);
  const datos=await api.json(); 
   mostrar(datos.results); 
   pagina=1;pagg.innerText = `${pagina}`;
   ant.style.display = 'inline-block';
  pri.style.display = 'inline-block';
  sig.style.display = 'inline-block';
  ultima.style.display = 'inline-block';
   mujerBuscar=false;
   hombreBuscar=true;
})

let todo=document.getElementById('Todes');
todo.addEventListener('click', ()=>
{mujerBuscar=false;
  hombreBuscar=false;
pagina=1;
ant.style.display = 'inline-block';
  pri.style.display = 'inline-block';
  sig.style.display = 'inline-block';
  ultima.style.display = 'inline-block';
MiAPi(pagina)}
)




//     <div class="tarjeta" style="width: 15rem;display:flex;text-align: center;margin-left :5%;margin-top :5%;" id="tarj">
//     <img src="${personaje.image}" alt="${personaje.name}">
//     <div style="">
//       <h5 > Personaje: ${personaje.name} </h5>
//       <h6 >Género: ${personaje.gender} </h6>
//       <h6 >Especie: ${personaje.species} </h6>
//       <h6 >Estado: ${personaje.status} </h6>
//       <h6 >Origen: ${JSON.stringify(personaje.origin.name)} </h6>
//       <h6 >Lugar: ${JSON.stringify(personaje.location.name)} </h6>

//     </div>
// </div>