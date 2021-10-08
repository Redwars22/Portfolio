var usuario = prompt("Insira seu nome completo:")
document.getElementById("nomeAluno").innerHTML = usuario
var aulas = ["</br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/tT8UFhIIFlI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></br><button onClick=\"fecharAula()\" class=\"fecharAula\">FECHAR AULA</button></br>", "</br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ybSYhLuVW0Y\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></br><button onClick=\"fecharAula()\" class=\"fecharAula\">FECHAR AULA</button></br>", "</br><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/mOtB34EtaKM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></br><button onClick=\"fecharAula()\" class=\"fecharAula\">FECHAR AULA</button></br>"]

function assistirAula(numModulo) {
  document.getElementById("videoAula").innerHTML = ""
  switch(numModulo){
    case 1:
      document.getElementById("videoAula").innerHTML += "<center>" + aulas[0] + "</center>" 
      break
    case 2:
      document.getElementById("videoAula").innerHTML += "<center>" + aulas[1] + "</center>"
      break
      case 3:
      document.getElementById("videoAula").innerHTML += "<center>" + aulas[2] + "</center>"
      break
  }
}

function fecharAula(){
  document.getElementById("videoAula").innerHTML = ""
}