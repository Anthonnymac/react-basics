import React from 'react'

export const Footer = ({copyright, ownerright}) => {
  return (
    <div>
        <div className='foot-div'>
            <ul className='foot-ul'> <p>Explore</p>
            <li>Blog</li>
            <li>News</li>
            <li>Timeline</li>
            <li>Weekly News</li>
            <li>Join Us</li>
        </ul>
        <ul className='foot-ul'> <p>Explore</p>
            <li>Blog</li>
            <li>News</li>
            <li>Timeline</li>
            <li>Weekly News</li>
            <li>Join Us</li>
        </ul>
        </div>

        <div className='end'>
            <p>@{copyright}</p>
            <p>@{ownerright}</p>
        </div>
    </div>
  )
}
