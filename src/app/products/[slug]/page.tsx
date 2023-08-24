import React from 'react'
import { Metadata } from "next";

interface ProductProps {
    params: {
        slug: string
    }
}

interface MetadataProps {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

// static slug list
const productsName: ReadonlyArray<string> = ['mcb1~63a', 'hlc80~125a', 'timer', 'truncking', 'add-on-button'];

export const generateMetadata =  async (
    { params, searchParams }: MetadataProps
  ): Promise<Metadata>  => {
    const { slug } = params;
    const metadata: Metadata = {
        title: slug,
    }
        
    return metadata;
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
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