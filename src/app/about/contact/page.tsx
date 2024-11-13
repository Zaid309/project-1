

export default async function Contact (){
    await new Promise((res) => 
        {
          setTimeout(res,4000)
        } )
    
     return (
       
        <div>
            <h1>This is Contact Page inside About Page</h1>
        </div>
        
    )
}