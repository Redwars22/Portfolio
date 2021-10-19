let intervalo, partidas, hora, minuto, j, temp
 
j = 0

function reset(){
  document.getElementById('showTimetable').innerHTML = ""
  j = 0
}

function generateTimetable(){
  hora = document.getElementById('firstDepartureHour').value
  minuto = document.getElementById('firstDepartureMinutes').value
  intervalo = document.getElementById('timeBetween').value
  partidas = document.getElementById('departures').value
  
  hora = parseInt(hora)
  minuto = parseInt(minuto)
  partidas = parseInt(partidas)
  intervalo = parseInt(intervalo)
  
  for(var i = 0; i < partidas; i++)
{
  if(minuto >= 60)
  {
    hora += 1
    minuto -= 60
  }
  
  if(hora < 10)
  {
    temp = "0" + hora.toString()
  } else if(hora > 23) {
    temp = "00"
    hora = 0
  } else {
    temp = hora.toString()
  }
  
  if(minuto < 10)
  {
    temp += ":0" + minuto.toString() + " "
  } else {
    temp += ":" + minuto.toString() + " "
  }
  minuto += intervalo
  j++
  document.getElementById('showTimetable').innerHTML += temp
  if(j == 8){
    document.getElementById('showTimetable').innerHTML += "<br>"
    j = 0
  }
  temp = ""
}
}