import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardSubtitle,
    CardTitle,
    Button,
    CardImg
} from 'reactstrap';

const PlayersList=[
    {id:1,name:"Virat Kohli",country:"India",category:"RightHand Batsman",image:'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/10/22/1002052-virat-kohli.jpg'},
    {id:2,name:"Glenn Maxwell",country:"Australia",category:"LeftHand Batsman",image:'https://i.guim.co.uk/img/media/ed99d6654ae81fcce3d1d7fc921fd562d34e6d5c/0_51_4503_2702/master/4503.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=28edcc0820aaff16a87de2f86ff019c5'},
    {id:3,name:"KL Rahul",country:"India",category:"RightHand Batsman",image:'https://images.indianexpress.com/2021/09/kl-rahul-1-2.jpg'},
    {id:4,name:"Rohit Sharma",country:"India",category:"RightHand Batsman",https://d3q33rbmdkxzj.cloudfront.net/1589466137456_aFz3CE.png'}
];
const players=PlayersList.map(plr=>(
    <Card>
       
      <CardBody>
      <CardImg top  src={plr.image} alt='Card Image Cap'/>
        <CardTitle tag="h5">
          {plr.id}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {plr.name}
        </CardSubtitle>
        <CardText>
          {plr.country} - {plr.category}
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
));
// class Counter extends Component{
    
//     constructor(props){
//      super(props);
//      this.state={
//          count:0
//      };
    
//     }
//     render(){
//         return (
//             <div>
//             <p> {players[this.state.count]} </p>
//            <button onClick={()=> this.setState({count:this.state.count+1})}>Next Player</button>
//             <button onClick={()=> this.setState({count:this.state.count-1} ) }>previous Player</button>
//         </div>
//         )       
//         }
// }
// export default Counter;
 
export default function Example(){
  const[Coun,setcoun]=useState(0);
    return(
    <div>
      <h1> {players[Coun]}</h1>
      <button className="btn btn-outline-dark sm-2" onClick={()=>{ setcoun(Coun+1) }} > Next Player</button>
      <button className="btn btn-outline-primary sm-2 m-2" onClick={()=>{ setcoun(Coun-1) }} > Prev Player</button>
    </div>
  )
}
