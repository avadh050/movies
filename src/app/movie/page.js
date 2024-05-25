import Link from 'next/link'
import React from 'react'

const Movie = async() => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5263a2021emsh287a1e1efe380e2p12493ejsn00d282f840c9',
      'x-rapidapi-host': 'netflix-data.p.rapidapi.com'
    }
  };
  

const res = await fetch (url,options)
const data = await res.json();
const moviedata = data.episodes.title
console.log(moviedata);

  return (
    <>
    This Is A Movie Page
    <Link href='movie/asdfghj'>
      go to
    </Link>
    </>
  )
}

export default Movie