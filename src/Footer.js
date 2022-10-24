import { Component } from "react"



let gmail="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjhdJstpZbztgBTdvhKTTcCSCffxKCtMgSKgpdlXVRmWCfRbNfgsQVdPfpKLqDzgZffTg";

var linkdin="https://www.linkedin.com/in/nagarajnikhil"

export default  class Function  extends Component{



    render(){
    return(
        <div>
        <p style={{"backgroundColor":"grey",}} >
            <pre>


                <h1>    Mini Project:<br></br>

                               <h3 style={{"padding-left":"90px"}}>   Nagaraj Nikhil

                               <br></br><a style={{"padding-left":"90px"}} target="_blank" href={gmail}>Gmail</a>

                               <br></br><a style={{"padding-left":"90px"}} target="_blank" href={linkdin} >Linkdin</a>
                               </h3>


                               



                </h1>



            </pre>
    </p>
        </div>
        );
    }
}