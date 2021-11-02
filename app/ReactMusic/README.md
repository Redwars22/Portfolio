# <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png" width="50px"> REACTMUSIC
<img src="https://user-images.githubusercontent.com/26885598/139753249-dd062cb9-7550-4837-a73e-34836959c38b.png" width="450px">

## 🇧🇷 VERSÃO EM PORTUGUÊS
### ℹ️ DESCRIÇÃO
O ReactMusic é um remix de um outro projeto meu, o Angular Music, porém feito em React e TypeScript. Atualmente está em versão BETA, quase concluído, falta apenas corrigir algumas falhas e ajustar a interface. 

[▶️ VERSÃO BETA](https://appreactmusic.firebaseapp.com/?96206)

### 🎧️⚙️ O COMPONENTE MUSIC
O componente Music é a parte mais importante da interface. Ele é responsável por exibir as informações sobre a música: autor, nome, arquivo, thumbnail etc.

```html
<Music
    title="Nome da música"
    singer="Autor da música"
    arg="endereco_do_arquivo.mp3"
/>
```

Dentro deste componente há também a função ***play()***, responsável por exibir o player e carregar o arquivo de música, cujo URL é passado por meio do parâmetro ***arg*** do componente.

```typescript
export default function Music(props) {
  function play() {
    //Player de audio
    document.getElementById('player').innerHTML = "<audio controls loop autoplay><source src='" + props.arg + "'></audio>";
  }
}
```

### 📂️ CÓDIGO FONTE
Todo o código fonte do projeto está disponível aqui nesta pasta. Você pode baixá-lo, distribuí-lo e modificá-lo, mas, se o fizer, ao menos mencione o autor original do projeto. Obrigado!

### 💻️🔌️ TECNOLOGIAS USADAS
- <img src="https://cdn0.iconfinder.com/data/icons/social-36/66/10-256.png" width="25px"> [Visual Studio Code](https://vscode.dev/)
- <img src="https://pbs.twimg.com/profile_images/1055142255722344448/xhqy_EUP_400x400.jpg" width="25px"> [StackBlitz](https://stackblitz.com/)
- <img src="https://materializecss.com/res/materialize.svg" width="25px"> [Materialize](https://materializecss.com/)
- <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" width="25px"> [ReactJS](https://reactjs.org/)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="25px"> [TypeScript](https://www.typescriptlang.org/)

***Fonte das músicas: YouTube.***

<hr/>

## ENGLISH VERSION
### ℹ️ INTRODUCTION
ReactMusic is a remix of another project of mine, Angular Music, but built in React and TypeScript. It's currently in BETA, almost completed, I only need to correct some bugs and adjust the UI.

[▶️ BETA VERSION](https://appreactmusic.firebaseapp.com/?96206)

### 🎧️⚙️ THE MUSIC COMPONENT
The music component is the UI's most important part. It's responsible for showing some information about the song: author, name, mp3 file, thumbnail etc.

```html
<Music
    title="Song title"
    singer="Author"
    arg="path_to_file.mp3"
/>
```

Inside this component, there's also the ***play()*** function, which shows the player and loads the music file. It gets the URL where the file is located through the ***arg*** parameter of the component.

```typescript
export default function Music(props) {
  function play() {
    //Audio player
    document.getElementById('player').innerHTML = "<audio controls loop autoplay><source src='" + props.arg + "'></audio>";
  }
}
```
### 📂️ SOURCE CODE
All of this project's source code is available here on this folder. You know download it, distribute, and modify it but, if you do it, at least mention the project's original author. Thanks!

### 💻️🔌️ WHAT DID I USE?
- <img src="https://cdn0.iconfinder.com/data/icons/social-36/66/10-256.png" width="25px"> [Visual Studio Code](https://vscode.dev/)
- <img src="https://pbs.twimg.com/profile_images/1055142255722344448/xhqy_EUP_400x400.jpg" width="25px"> [StackBlitz](https://stackblitz.com/)
- <img src="https://materializecss.com/res/materialize.svg" width="25px"> [Materialize](https://materializecss.com/)
- <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" width="25px"> [ReactJS](https://reactjs.org/)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="25px"> [TypeScript](https://www.typescriptlang.org/)

***Source of the songs: YouTube***
