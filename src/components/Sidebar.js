import { Stack, cardHeaderClasses } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constants'
import { Opacity } from '@mui/icons-material'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
    // console.log(categories)
    // const selectedCategory = 'New';
  return (
    <Stack direction='row' sx={{overflowY:'auto', height:{sx:'auto', md: '95%'},flexDirection:{sx:'row', md:'column'}}}>
        {
            categories.map((category)=>(
                <button key={category.name} className='category-btn' 
                onClick = {() => setSelectedCategory(category.name)}
                style={{
                    background:category.name === selectedCategory ? '#FC1503' : '', color:'white',
                    opacity:category.name === selectedCategory ? '1' : '0.8'
                  
                }}>
                    <span style={{color: category.name === selectedCategory ?'white':'red', marginRight:'15px'}}>{category.icon}</span>
                    <span>{category.name}</span>
                   
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar