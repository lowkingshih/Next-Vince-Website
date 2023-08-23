import { Metadata } from "next";
import Link from 'next/link';
import React from 'react'


export const metadata: Metadata = {
  title: '搜尋'
}
const Search = () => {
  return (
    <>
      <Link href="/">
          回首頁
      </Link>
      <div>Search</div> 
    </>
  )
}

export default Search