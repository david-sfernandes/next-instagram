import type { NextPage } from 'next'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'
import DocHead from './head'

const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen overflow-y-scroll lg:pl-[245px]">
      <DocHead />
      <Header />
      <Feed />
      <Modal />
      <Footer /> 
    </div>
  )
}

export default Home
