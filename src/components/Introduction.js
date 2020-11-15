import React from "react";

const Introduction = (props) => {
  return (
    <section id="about-me">
      <h1>
        Hello my name is <span class="rotate text-important">{props.name}</span>{" "}
        ,<br />
        and i will became Soon a Developper,Enjoy me on <span class="title"><a href="https://gomycode.com/TN-FR/home" target="blank" >{props.text}</a> </span>{" "}
      </h1>
      <img class="avatar rotate" src={props.imgSrc} alt={props.name} />
    </section>
  );
};

export default Introduction;