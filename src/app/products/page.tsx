import React from 'react'
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '產品列表 | 巨東科技'
}

const Products = () => {
  return (
    <>
      <nav>
        <Link href="/">
          back to home
        </Link>
        <Link href="/products/add-on-button">
          add-on-button
        </Link>
        <Link href="/products/mcb1~63a">
          mcb1~63a
        </Link>
        <Link href="/products/hlc80~125a">
          hlc80~125a
        </Link>
        <Link href="/products/truncking">
          truncking
        </Link>
      </nav>
      <div>All Products</div>
    </>
  )
}   

export default Products