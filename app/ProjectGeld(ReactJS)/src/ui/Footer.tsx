import React from 'react'

export default function Footer(){
  return (
    <div className="footer">
      <p>
        <strong>Project Geld</strong>
        <em>, desenvolvido por André Pereira (@Redwars22) usando ReactJS e Materialize.</em>
      </p>
      <a
       className="btn blue-grey darken-4"
       href="https://github.com/Redwars22/"
      >
        <i className="material-icons left">folder_shared</i>
        CÓDIGO FONTE E MAIS PROJETOS
      </a>
    </div>
  );
}