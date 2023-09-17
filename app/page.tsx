import Image from 'next/image'
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import {getServerSession} from "next-auth";
import tea from '@/public/images/tea.jpg';
import {Metadata} from "next";
import {authOptions} from "@/app/api/auth/authOptions";

export default async function Home() {
   const session = await getServerSession(authOptions);


  return (
      <main className="relative h-screen">
          <h1>Hello {session ? <span>{session.user!.name}</span>: 'World'}!</h1>
            <Link href={'/users'}>Users</Link>
          <Image src={tea} alt="Tea"/>
          {/*<Image*/}
          {/*    src="https://bit.ly/react-cover"*/}
          {/*    alt="Tea"*/}
          {/*    fill*/}
          {/*    className="object-cover"*/}
          {/*    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"*/}
          {/*    quality={100}*/}
          {/*/>*/}
          <ProductCard/>
      </main>
  )
}

export async  function generateMetadata():Promise<Metadata> {
   // const product = await fetch('');

   return {
      title: 'product.title',
      description: '...',
   }
}
