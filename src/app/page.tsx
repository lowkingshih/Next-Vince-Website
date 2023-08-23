import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: {
    default: '巨東科技',
    template: '%s | 巨東科技'
  },
  description: '巨東科技',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Link href="/products">
            Products
        </Link>
        <Link href="/product-certification">
            產品認證
        </Link>
        <Link href="/search">
          放大鏡
        </Link>
      </nav>
    </main>
  )
}
