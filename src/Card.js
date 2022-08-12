import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


function Card ({cardData}) {
    return (    
    <div className="col-lg-4" > 
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{cardData.title}</h5>
        <h6 className="card-price text-center">{cardData.currency}{cardData.price}<span className="period">{cardData.period}</span></h6>
        <hr/>

        <ul className="fa-ul">
        {cardData.features.map((list)=>{
                    return (
                      <li className={!list.isEnable ?'text-muted':""}>
                      <span className="fa-li">                      
                      {
                      list.isEnable ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>
                      }                                       
                      </span>
                      <span>
                      { list.isBold ? <strong>{list.name}</strong> : list.name }                        
                      </span>
                        
                     </li> 
                    ); 
                
              })
              
              }          
        </ul>
        
        <div className="d-grid">
          <a className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Card;


