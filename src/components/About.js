import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sint dignissimos explicabo delectus veniam reprehenderit in dolorum deserunt ipsa commodi repellendus dolores accusamus, minus natus earum aut distinctio nesciunt veritatis?</p>
    <img src={image} alt="I made this"/>
    </div>;
}

export default About;
