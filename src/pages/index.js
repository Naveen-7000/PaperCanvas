import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import ToolBox from '@/components/ToolBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Menu />
    <ToolBox />
    </>
  )
}
