import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <h1>Hello {process.env.NEXT_PUBLIC_HELLO}</h1>
  )
}
