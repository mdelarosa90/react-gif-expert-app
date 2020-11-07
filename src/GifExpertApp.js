import React, { Fragment, useState } from 'react'
import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid'

function GifExpertApp() {
    //const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);
    return (
       <Fragment>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories} />
           <hr/>
           <ol>
               {categories.map((text) => <GifGrid key={text} category={text} />)}
           </ol>
       </Fragment>
    )
}

export default GifExpertApp
