import React from 'react'
import { Metadata, ResolvingMetadata } from "next";

interface ProductProps {
    params: {
        slug: string
    }
}

interface MetadataProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export const generateMetadata =  async (
    { params, searchParams }: MetadataProps,
    parent?: ResolvingMetadata,
  ): Promise<Metadata>  => {
    const { slug } = params;
    console.log('generateMetadata', params, searchParams);
    return {
      title: slug,
    };
  }
export const dynamicParams = false;
export const generateStaticParams = async () => {
    const productsName = ['mcb1~63a', 'hlc80~125a', 'timer', 'truncking', 'add-on-button']
    const slugs = productsName.map(slug => ({ slug }));

    return slugs
}

const Product = ({ params }: ProductProps) => {
    const { slug } = params;
    return (
        <div>Single Product {slug}</div>
    )
}

export default Product