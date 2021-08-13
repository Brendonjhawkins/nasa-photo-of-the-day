import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

// const stylePhoto


const Photos = ({photo, title, date, explanation}) => {
  return (
    <div>
    <Card>
      <CardImg top width="50%" src={photo} alt="NASA Photo of the Day" />
      <CardBody>
        <CardTitle tag="h2">{title}</CardTitle>
        <CardSubtitle tag="h4" className="mb-2 text-muted">{date}</CardSubtitle>
        <CardText color='yellow'>{explanation}</CardText>
      </CardBody>
    </Card>
    </div>
  )
  
};

export default Photos






//______________________SCRAPS_____________________________
{/* <div>
<Card>
  <CardImg top width="100%" src={props.url} alt="NASA Photo of the Day" />
  <CardBody>
    <CardTitle tag="h5">{props.title}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.date}</CardSubtitle>
    <CardText>{props.explanation}</CardText>
  </CardBody>
</Card>
</div>
); */}


// const Photo = ({photo}) => {
//     return (
//         <div>
//             <img src={photo} />
//         </div>
//     )
    
//   };