import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 import html from "../Images/html.jpg";
 import css from "../Images/css.jpg";
 import cli from "../Images/cli.jpg";
 import deployingwebsite from "../Images/deployingwebsite.jpg" ;
 import git from "../Images/git.jpg";
 import js from "../Images/js.jpg";

 const  Certificates = () => {

  const certificateList = [{
    id:1,
    name: "HTML",
    imageURL: html,
  },
  {
    id:2,
    name: "CSS",
    imageURL: css,
  },
  {
    id:3,
    name: "JS",
    imageURL: js,
  },
  {
    id:4,
    name: "CLI",
    imageURL: cli,
  },{
    id:5,
    name: "GIT",
    imageURL: git,
  },
  {
    id:6,
    name: "Deploying Website",
    imageURL: deployingwebsite,
  },
];
  return ( 
  <section id="about"> 
  <div className="container flex-column ">
  <div className="blank-div"></div>
  {certificateList.map((c)=> {
    return   <CertificateHolder image= {c.imageURL} title={c.name} description={c.name} /> 

  })}


   </div> 
  </section>

  

  );
 }

 const CertificateHolder = (props) => {
 return(
  <Card className="mt-4" style={{ width: '70rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title >{props.title}</Card.Title>
    <Card.Text >
      {props.description}    </Card.Text>
  </Card.Body>
</Card>

 );
 }
export default Certificates;