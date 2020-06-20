import React from 'react';

const Loader = ({msg})=>{

return(

    <div class="ui active dimmer">
    <div class="ui indeterminate text loader">{msg}</div>
  </div>

);
Loader.defaultProps ={
msg:"Loading..."
};
}

export default Loader;