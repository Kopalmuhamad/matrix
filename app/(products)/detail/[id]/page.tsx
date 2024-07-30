import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

async function fetchProducts(id: any) {
    try {
        const res = await fetch(`http://localhost:3000/api/products?id=${id}`, { cache: 'no-store' });
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
const Detail = async (props: any) => {
    const { params } = props
    const product = await fetchProducts(params.id);
    return (
        <div className='w-full min-h-screen pt-[100px]'>
            <Container className='h-full flex items-center justify-center'>
                <main className='max-w-lg h-fit w-full shadow-xl rounded-lg'>
                    <Image src={product.image} alt='' width={200} height={200} className='w-full aspect-square object-contain' />
                    <h1 className='text-2xl font-medium pl-4 py-2'>{product.name}</h1>
                    <h3 className='text-xl font-medium pl-4 pb-2'>Rp. {product.price}</h3>
                    <div className='flex items-center justify-start gap-x-4 pl-4 pb-4'>
                        <Button>Buy</Button>
                        <Button>Add to cart</Button>
                    </div>
                </main>
            </Container>
        </div>
    )
}

export default Detail