import React from 'react'

export default function HomeHeader() {
  return (
    <header className='w-96vw overflow-hidden h-90vh z-100' >
        <div className="w-11/12 my-0 mx-auto grid grid-cols-2 items-center gap-x-20 h-full mt-8">
            <div class="my-4 pt-6 pb-12">
                <h1 className='text-8xl font-bold mb-8'>Generate valid certificates with Blockcertify</h1>
                <p className='my-4 pb-9 text-2xl mb-8'>
                Currently large no of training programs is organized, and certificates are provided. 
                There is no mechanism to validate digital certificates so here we are creating a system in which custom digital certificate can be generated!
                </p>
                <a href="/" class="bg-[#5967E8] font-semibold px-12 py-4 text-3xl rounded-full ">Get Started   <span>&#8594;</span></a>
            </div>
            <div class="">   
                <div class="h-max w-auto">
                    <img className='' src="/homeheader.png" alt='header' height="600px"/>
                </div>
            </div>
        
        </div>
    </header>
  )
}
