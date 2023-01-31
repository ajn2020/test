import AccordionGrid from '@/components/AccordionGrid'
import Subheading from '@/components/Subheading'
import Quiz from '@/components/Quiz'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hounslow Recycling Hub</title>
        <meta name="application-name" content="Hounslow Recycling Hub" />
        <meta name="description" content="Your go-to stop for all recycling things in the London Borough of Hounslow!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Quiz/>
      <Subheading
        title="Recycling Services Available"
      />
      <AccordionGrid />
    </>
  )
}
