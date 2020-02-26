import React from 'react'

export const trump = async () => {
   try {
     const res = await axios.get(`http://tronalddump.io/random/quote`)
    return res
  } catch(e) {
    console.log(e)
  }
}
