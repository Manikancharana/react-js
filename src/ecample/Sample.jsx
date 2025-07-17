import React from "react";
import "./Sample.css";
const Mango = () => <h2>mango are sweet</h2>;

const Banana = () => <h3>Banana is healthy fruit </h3>;

const Image = () => {
  return (
    <div>
      <img id="img" src="./bird.jpg" alt="Bird" />
    </div>
  );
};
const obj={
  name:"mani",
  age:20,
  city:"VSP",
  area:"Gajuwaka"
}

var obj1={
  a:"Apple",
  b:"Bat",
  c:"Cat",
  d:"Doctor"
} //Distructring 
const {a,b,c,d}=obj1;

let a1 = "Mani";
let b1 = "Kancharana";

function Sample() {
  return (
    <div>
      Sample
      <Mango />
      <Banana />
      <Image />
      <section>
        <h2 id="name">
          {a1} {b1}
        </h2>
        <p> {obj.name},{obj.area}</p>  
        <p> Destructring Object {a},{b},{c },{d}</p>
      </section>
        
    </div>
  );
}

export default Sample;
