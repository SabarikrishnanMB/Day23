import React from 'react';
import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const data = [
    {
      title: 'Free',
      price: 0,
      currency: "$",
      period: "/month",
      features: [
        {
        name: "Single User",
        isEnable: true,
        },
        {
        name: "5GB Storage",
        isEnable: true,
        },
        {
        name: "Unlimited Public Projects",    
        isEnable: true,   
        },
        {
        name: "Community Access",      
        isEnable: true,  
        },
        {
        name: "Unlimited Private Projects",      
        isEnable: false,  
        },
        {
        name: "Dedicated Phone Support", 
        isEnable: false,       
        },
        {
        name: "Free Subdomain",  
        isEnable: false,      
        },
        {
        name: "Monthly Status Reports", 
        isEnable: false,       
        },
      ]
    },
    {
      title: "Plus",
      price: 9,
      currency: "$",
      period: "/month",
      features: [
        {
          name: "5 Users",
          isEnable: true,
          isBold: true,
        },
        {
          name: "50GB Storage",
          isEnable: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          name: "Community Access",
          isEnable: true,
        },
        {
          name: "Unlimited Private Projects",  
          isEnable: true,      
        },
        {
          name: "Dedicated Phone Support",   
          isEnable: true,     
        },
        {
          name: "Free Subdomain", 
          isEnable: true,       
        },
        {
          name: "Monthly Status Reports", 
          isEnable: false,       
        },
      ]
    },
    {
      title: "Pro",
      price: 49,
      currency: "$",
      period: "/month",
      features: [
        {
          name: "Unlimited Users",
          isEnable: true,
          isBold: true,
        },
        {
          name: "150GB Storage",
          isEnable: true,
        },
        {
          name: "Unlimited Public Projects",  
          isEnable: true,     
        },
        {
          name: "Community Access",  
          isEnable: true,      
        },
        {
          name: "Unlimited Private Projects", 
          isEnable: true,       
        },
        {
          name: "Dedicated Phone Support",  
          isEnable: true,      
        },
        {
          name: "Free Subdomain", 
          isEnable: true,       
        },
        {
          name: "Monthly Status Reports",
          isEnable: true,        
        },

      ]
    }
  ]
  return (
    <section className = "pricing py-5">
    <div className="Container">
    <div className="row">
    { data.map((item)=> {
            return <Card cardData={item}></Card>
          })}
      </div>
    </div>
    </section>
  );
}

export default App;

