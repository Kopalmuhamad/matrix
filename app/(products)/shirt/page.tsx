import Container from '@/components/container';
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

async function fetchProducts() {
    try {
        const res = await fetch('http://localhost:3000/api/products?category=shirt', { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const ShirtSection = async () => {

    const products = await fetchProducts();

    return (
        <div className='pt-[60px]'>
            <Container>
                <header className='py-10 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground'>Shirt</header>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-20'>
                    {products && products?.map((product: any, index: any) => (
                        <Link href={`/detail/${product.id}`} key={index}>
                            <Card key={index}>
                                <CardContent className="p-0">
                                    <Image src={product.image} alt="" width={200} height={200} className="w-full" />
                                    <h1 className="text-foreground text-base font-semibold py-2 pl-2">{product.name}</h1>
                                    <h3 className="pl-2">{product.price}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default ShirtSection