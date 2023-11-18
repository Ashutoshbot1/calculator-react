import React, { useState } from "react";
import './Calculator.css'

const Calculator = () => {
  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');

//   const [oper,setOper]=useState('');

  const [result,setResult]=useState('');
  

//   const num1=Number(num1);
//   const num1=NUmber

  const [success,setSuccess]=useState('');

  
  
  
  function handelOperation(op){

      function validate(){
        if(!inp1 || !inp2){
            return false;
        }
        else if(isNaN(inp1) || isNaN(inp2)){
            return false;
        }
        else if(op==='/' && inp2===0){
            return false;
        }
        else{
            return true;
        }
    
      }




    if(!validate()){
        setSuccess(false);


    }
    else{
        setSuccess(true);
        
        switch(op){

            case '+':setResult(inp1+inp2);
            break;

            case '-' :setResult(inp1-inp2);
            break;

            case '*' :setResult(inp1*inp2);
            break;

            case '/' :setResult(inp1/inp2);
            break;

            default:setSuccess(false);

        }

    }

    // console.log(inp1,inp2 ,success)
    
  }



  return (
    <div className="calculator">
      <div className="container">
        <div className="inputs">
          <input type="text" placeholder="Enter number" onChange={(e)=>setInp1(Number(e.target.value))}/>
          <input type="text" placeholder="Enter number" onChange={(e)=>setInp2(Number(e.target.value))}/>
        </div>

        <div className="buttons">
          <button onClick={()=>handelOperation('+')}>+</button>
          <button onClick={()=>handelOperation('-')}>-</button>
          <button onClick={()=>handelOperation('*')}>*</button>
          <button onClick={()=>handelOperation('/')}>/</button>
        </div>

        <div className="outputs">
          <div className="result">
            Result : <span>{success && result}</span>
          </div>
          <div className="messages">
            {success ===false && <div className="error">error</div>}
            {success === true && <div className="success">success</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
