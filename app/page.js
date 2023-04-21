import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['600', '400'],
  subsets: ['cyrillic', 'latin']
})

export default function Home() {
  return (
    <main>
      <h1 className={montserrat.className}>Hi привет</h1>
    </main>
  )
}
