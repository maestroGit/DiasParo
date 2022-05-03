// Para formatear fechas
// Moments.js pesa 4.21 MB que es mucho para el uso que necesitamos
// Days.js pesa 4.21 MB que es mucho para el uso que

// Dias entres fechas
// Cuadro con rangos de días cotizados y prestación
// Días que corresponde de paro hoy
// Días que faltan para el siguiente bloque
// https://www.youtube.com/watch?v=u1IozLnAI_8
// Calcular días transcurridos a partir de una fecha.

// var globales
let milisecondsDay = 24 * 60 * 60 * 1000;
let count = 0;
// Dom elements
const btn = document.getElementById("btn");


// Calculate time betwen dates
const calculate = () => {
  // Get inputs values
  let StartDate = document.getElementById("startdate").value;
  let EndDate = document.getElementById("today").value;
  if (EndDate == "") {
    alert("EMPTY End date");
  } else {
    //let hoy = Date.now();
    //console.log({ hoy });
    console.log(typeof StartDate);
    console.log({ StartDate });
    console.log({ EndDate });
    const startDataParse = Date.parse(StartDate); // returns milliseconds since January 1, 1970
    console.log(typeof startDataParse);
    console.log({ startDataParse });
    const endDataParse = Date.parse(EndDate); // returns milliseconds since January 1, 1970
    console.log(typeof endDataParse);
    console.log({ endDataParse });
    // milisecundos transcurridos en el periodo dado
    let milisecondsTranscurridos = Math.abs(endDataParse - startDataParse);
    console.log({ milisecondsTranscurridos });
    // milisecondsTranscurridos en Días
    let diasTranscurridos = Math.floor(
      milisecondsTranscurridos / milisecondsDay
    );
    console.log({ diasTranscurridos });
    rangeDaysCompare(diasTranscurridos);
  }
};

// Add event listener
btn.addEventListener("click", calculate);

// Convert miliseconds to days
const milisecondsxDay = (milisecons) => {
  // Milisegundos por día
  //let milisecondsDay = 24 * 60 * 60 * 1000;
  console.log({ milisecondsDay });
  console.log(miliseconds);
  let result = milisegundos / milisecondsDay;
  return result;
};

// Show days paro
const showDaysParo = (days) => {
  if(count>0){
    console.log('limpia');
    let existdiv = document.getElementsByClassName('info');
    existdiv[count].innerHTML="";
    //existdiv[count].style.backgroundColor = "red";
  }
  count++;
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("info");
  resultDiv.innerHTML = `<h1>${days}<h1/>`;
  document.body.appendChild(resultDiv);
};

// Compare range days to diferents cases
const rangeDaysCompare = (days) => {
  console.log({ days });
  switch (true) {
    case days < 360:
      alert("menos de un año");
      break;
      case days > 360 && days < 540:
        console.log("Los dias de paro son:",120);
        showDaysParo(120);
        break;
        case days > 539 && days < 720:
          console.log("Los dias de paro son:", 180);
          showDaysParo(180);
          break;
          case days > 719 && days < 900:
            console.log("Los dias de paro son: 240");
            showDaysParo(240);
            break;
            case days > 899 && days < 1080:
              console.log("Los dias de paro son: 300");
              showDaysParo(300);
              break;
              case days > 1079 && days < 1260:
      console.log("Los dias de paro son: 360");
      showDaysParo(360);
      break;
      case days > 1259 && days < 1440:
        console.log("Los dias de paro son: 420");
      showDaysParo(420);
      break;
    //console
    case days > 1439 && days < 1620:
      console.log("Los dias de paro son: 480");
      showDaysParo(480);
      break;
      case days > 1619 && days < 1800:
        console.log("Los dias de paro son: 540");
        showDaysParo(540);
        break;
        case days > 1799 && days < 1980:
          console.log("Los dias de paro son: 600");
          showDaysParo(600);
          break;
          case days > 1979 && days < 2160:
      console.log("Los dias de paro son: 660");
      showDaysParo(660);
      break;
      case days > 2159:
        console.log("Los dias de paro son: 720");
      showDaysParo(720);
      break;
  }
};

// Notas

// const getNumDaysFromNow = (num) => {
//   const today = new Date();
//   //console.log({ today });
//   const NumdaysFromNow = new Date();
//   NumdaysFromNow.setDate(NumdaysFromNow.getDate() + num);
//   console.log({ num }, { NumdaysFromNow });
// };

// // dado dos JavaScriptDateobjetos,
// //¿cómo puedo obtener una lista de los días (expresados como objetos de fecha) entre esas 2 fechas?
// const getDatesBetweenDates = (startDate, endDate) => {
  //   let dates = [];
  //   //to avoid modifying the original date
  //   const theDate = new Date(startDate);
  //   while (theDate < endDate) {
    //     dates = [...dates, new Date(theDate)];
//     theDate.setDate(theDate.getDate() + 1);
//   }
//   dates = [...dates, endDate];
//   return dates;
// };

// // Fecha de hoy en texto
// const hoyTexto = () => {
//   n = new Date();
//   //console.log({ n });
//   y = n.getFullYear(); //Año
//   m = n.getMonth() + 1; //Mes
//   d = n.getDate(); //Día
//   const hoy = document.createElement('p');
//   hoy.setAttribute("id","now");
//   document.body.appendChild(hoy);
//   console.log(hoy.id);
//   document.getElementById("now").innerHTML = d + "/" + m + "/" + y;
// };