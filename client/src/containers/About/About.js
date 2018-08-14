import React from "react";
import "./About.css";

// const styles = {
//   divStyle: {
//       background: "green",
//       justifyContent: "flex-end",
//   }
// };
const About = () => (


  <div className="about">
    <div className="aboutUs">
      <h1 className="aboutH1">About the Owner</h1>
      <p>
        What started out as a dream, hatched over a cup of coffee and a homemade
        cake turned into a reality when Catawba Coffee came to be in 2014.{" "}
      </p>
      <p>
        I came to Mount Holly to manage another independent shop. Here I met
        some of the most wonderful people! Many who knew each other and some who
        just happened by (mostly by accident) no matter how you got here or
        where you came from you became a regular. You'd always find the most
        eclectic group of folks sitting around and telling stories, all over a
        cup of coffee.
      </p>
      <p>
        When the opportunity came to buy the shop it was almost immediately a
        Yes. Fear and doubt were quickly pushed aside when the leaving of this
        town and the family that we became a part of was imminent. The challenge
        was accepted and we never looked back.
      </p>{" "}
      <p>
        So, If you're in the area be sure to stop in for a cup and a smile. We'd
        love to meet you!
      </p>
    </div>
    
    <img alt="owner" className="owner" src={require("../../images/CCirene.jpeg")} />

   
  </div>


);

export default About;
