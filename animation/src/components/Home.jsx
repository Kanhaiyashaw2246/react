import React from 'react'
import BodySec from './BodySec';


const src =
  "https://img.freepik.com/free-vector/hand-drawn-man-working-from-home_23-2148818123.jpg?w=740&t=st=1685169679~exp=1685170279~hmac=54da5278e66e44ed538cc9ab9100132c53a4f3f30b4baecbe727b5ee85f8ac25";


function Home() {
  return (
    <>
    <BodySec 
    src={src} 
    button="Get Started" 
    brand="Nikns" 
    head2="We are ™ team" 
    head="Grow your bussiness with" />
    </>
  )
}

export default Home;
