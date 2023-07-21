'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import{useState, useEffect} from 'react'
import {sigIn, signOut, useSession, getProviders} from 'next-auth/react'



const Nav = () => {
   const isUserLoggdIn = true;

   const [providers, setProviders] = React.useState(null)

    React.useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    },[]);

  return (
    <nav className='w-full flex-between mb-16 pt-3'>
      
      
        <Link   href='/' className='flex gap-2 flex-center'>
       
            <Image 
            src='assets/images/logo.svg'
            alt='logo'
            width={30}
            height={30}
            className='object-contain'
            />
        <p className='logo_text'>NouveauProverbe</p>
       </Link>
       
         
        {/* {Mobile Navigation} */}
       <div className='sm:flex hidden'>
        {isUserLoggdIn ? (
        <div className='flex gap-3 md:gap-5'>
            <Link 
            href='/create-prompt'
            className='black_btn'>
                Créer un Proverbe
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
            Se Déconnecter
            </button>
            <Link href='/profile'>
            <Image 
            src='/assets/images/profile.svg' 
            alt='profile' 
            width={37} 
            height={37} 
            className='rounded-full'/>
            </Link>
        </div>
        ) : (
        <>
         {providers && Object.values(providers).map((provider) => (
          <button
          type='button'
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className='black_btn' >
            Se Connecter avec {provider.name}
         

          </button>
          ))}
        </>
        )}
        </div>
    </nav>
  )
}

export default Nav