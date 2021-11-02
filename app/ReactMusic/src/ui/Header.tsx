import React from 'react';

export default function Header(props) {
  return (
    <div class="head">
      <img src={props.url} width="150px" />
    </div>
  );
}
