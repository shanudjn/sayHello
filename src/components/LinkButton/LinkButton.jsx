import React from 'react';
import { Outlet, Link } from "react-router-dom";

function LinkButton({title,id}) {
  console.log(typeof id)
  return (
    <Link to={`/${id}`} className='px-4 py-2 font-mono font-semibold bg-fuchsia-300 text-black border border-black shadow-offset-black my-2'>
        {title}
    </Link>
  )
}

export default LinkButton