import './App.css'


function App(){
return (
<>
<Combined/>
</>
)
}

 
export default App;

function Combined(){
  const free = {
    type: "FREE",
    price: "$0/month",
    storage: 50   ,
    User : "Single" ,
    PublicProjects: {
        value : "Unlimited Public Projects",
        style: "active",
    },
    Access:{
        value: "Community Access",
        style: "active"
    },
    PrivateProjects:{
        value:"Unlimited Private Projects",
        style: "Inactive"
        
    },
    PhoneSupport:{
        value:"Dedicated Phone Support",
        style: "Inactive"
    },
    subdomain:{
        value:"Free Subdomain",
        style:"Inactive"
    },
    reports:{
        value:"Monthly Status Reports",
        style:"Inactive"
    }
}
const plus = {
    type: "PLUS",
    price: "$9/month",
    storage: 100 ,
    User : 5 ,
    PublicProjects: {
        value : "Unlimited Public Projects",
        style: "active",
    },
    Access:{
        value: "Community Access",
        style: "active"
    },
    PrivateProjects:{
        value:"Unlimited Private Projects",
        style: "active"
    },
    PhoneSupport:{
        value:"Dedicated Phone Support",
        style: "active"
    },
    subdomain:{
        value:"Free Subdomain",
        style:"active"
    },
    reports:{
        value:"Monthly Status Reports",
        style:"Inactive"
    }
}
const pro = {
    type: "PRO",
    price: "$49/month",
    storage: 500   ,
    User : "Unlimited",
    PublicProjects: {
        value : "Unlimited Public Projects",
        style: "active",
    },
    Access:{
        value: "Community Access",
        style: "active"
    },
    PrivateProjects:{
        value:"Unlimited Private Projects",
        style: "active"
    },
    PhoneSupport:{
        value:"Dedicated Phone Support",
        style: "active"
    },
    subdomain:{
        value:"Free Subdomain",
        style:"active"
    },
    reports:{
        value:"Monthly Status Reports",
        style:"active"
    }
}
  return(
    <div className = "All cards">
    <Pricecard model={free}/>
<Pricecard model={plus}/>
<Pricecard model={pro}/>
    </div>


  )
}
function Pricecard({model}){
return (
<div className="pricecards">
<h1 className = "Priceheader">{model.price}</h1>
<hr/>
<p className = "type">{model.type}</p>
<p className={model.User.style} id="align">{model.User} Users</p>
<p className={model.storage.style}id="align">{model.storage}GB</p>
<p className={model.PublicProjects.style}id="align">{model.PublicProjects.value}</p>
<p className={model.Access.style}id="align">{model.Access.value}</p>
<p className={model.PrivateProjects.style}id="align">{model.PrivateProjects.value}</p>
<p className={model.PhoneSupport.style}id="align">{model.PhoneSupport.value}</p>
<p className={model.subdomain.style}id="align">{model.subdomain.value}</p>
<p className={model.reports.style}id="align">{model.reports.value}</p>
<button>BUY</button>
</div>
)
}
















// function App(){
 
//   return<>
  
  
//   {/* /////////////////////
//   {/* calling the components thrice */}
//   <Profile name = "RK" batch = "52"/> 
//   <Profile  name = "Priya" batch = "53"/>
//   <Profile name = "Ramy" batch = "54"/>
//   </>
  
//   }
  
//   export default App
//   // Props - It will create an empty object {}
//   function Profile(props){
//     // We can write other js function  here (above return)
//   //  function test(){
//   //   return "KR"
//   //  } 
//     return(
//   <div className = 'profile-container'>
//   <img src='https://th.bing.com/th?id=OIP.GmFtA0aTBPPuhV5E4QN5GAHaGh&w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2' alt='#'/>
//   <h1>{props.name} </h1>
//   <h2>{props.batch} </h2>
//   </div>
//   /////////////////////// */}
//     )
//   }
   
