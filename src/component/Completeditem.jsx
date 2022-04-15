import{useState}from"react"
export const Completeditem=({letest,showdta})=>{
   
    return <div>
        <button onClick={showdta} id="btn2">Show Completed Item</button>
        {letest.map((e)=>{
        return <h2>{e.title}</h2>
        })
        }
       
    </div> 
}