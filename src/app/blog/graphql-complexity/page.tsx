import React from 'react'
import graphQlLog from '../../../../images/graphql-logo.png'

export default function BlogGraphQLComplexity() {


  return (
    <main className='flex flex-col mx-auto max-w-screen-xl mt-4'>
    <div className='flex flex-row max-w-screen-2xl'>
        <div  className='flex flex-col  mx-auto mb-auto mt-32 place-content-evenly'>
            <h1 className='text-4xl mb-4'>Blog Title</h1> 
            <h2 className='text-2xl'>Blog Tagline</h2>
        </div>
        
        <img className='max-w-sm rounded-full shadow-2xl m-3 justify-self-end hover:animate-wiggle'
                alt='Avatar' src={graphQlLog.src} />
      </div>
    </main>
  )
}