var nomeUsuario, nomeAmigo, mensagem, estruturaVoce, estruturaAmigo
var sobre = "PROJECT ARLAND - criador de chat fake criado por André Pereira usando HTML, JS e CSS. " + 
    "Versão 1.0.2. NOVIDADES NESTA VERSÃO: 1-Botão deletar chat, 2-Botão ajuda com instruções de uso." + 
    " RECURSOS EM DESENVOLVIMENTO: Trocar nomes de usuário e interface de usuário mais intuitiva."
var ajuda = "Este é um site de chat falso. Assim que o abrir, você vai se deparar " + 
    "com uma caixa de diálogo perguntando pelo seu nome de usuário e o nome de usuário " + 
    "de outra pessa com a qual você estará conversando (Para ambos, você pode escolher qual quiser)." + 
    " Basta então escrever a mensagem desejada na caixa de mensagens. Para enviá-la como sendo você," + 
    " aperte o botão >. Para enviá-la como sendo a outra pessoa, aperte o botão <. Para deletar o chat use o botão X.";

login()

function login(){
  nomeUsuario = prompt("Insira teu nome ou nickname:")
  nomeAmigo = prompt("Insira o nome ou nickname do teu amigo:")
  estruturaVoce = "<strong>@" + nomeUsuario + ": </strong>"
  estruturaAmigo = "<strong>@" + nomeAmigo + ": </strong>"
}

function escreverMensagem(quem) {
  mensagem = document.getElementById("campoMensagem").value
  if (quem == 1) {
    document.getElementById("chatBox").innerHTML +=
      estruturaVoce + mensagem + "</br>"
  } else {
    document.getElementById("chatBox").innerHTML +=
      estruturaAmigo + mensagem + "</br>"
  }
}

function exibeInfo(){
  alert(sobre)
}

function exibeAjuda(){
  alert(ajuda)
}

function deletar(){
  document.getElementById("chatBox").innerHTML = ""
}
