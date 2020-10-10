import React, { useState } from 'react';
import Blog from './components/Blog';

const items =[
{
    title:'What is React',
    content:'React is js framework'
},
{
    title:'What is java',
    content:'java is oops language'
},
{
    title:'What is html',
    content:'java is hypertext markup language'
}

];
export default()=>{
return (
    <div>
        <Blog items={items}/>
    </div>
    );
};