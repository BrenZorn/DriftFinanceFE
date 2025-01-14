import React from 'react'
import Nav from '../components/nav'
import Login from '../components/Authentication/Login'
import Create from '../components/Authentication/Create'
import { useParams } from 'react-router-dom';

function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
}

function Authentication() {
  const {section} = useParams()
  return (
    <div>
      <Nav />
      {
        section == 'create' && <Create />
      }
      {
        section == 'signin' && <Login /> 
      }
    </div>
  )
}

export default Authentication