import image from '@/constant/Images/image'
import Image from 'next/image'

const Prefer = () => {
  return (
    <section className='py-24 sm:py-32 bg-slate-50'>
    <div className='app__container grid grid-cols-1 lg:grid-cols-2 gap-8'>
    <div className='mx-auto'>
    <Image src={image.bannerMan} alt='digital marketing'/>
    </div>
    <div>
    <h1 className='primary-heading'>Do you remember the story of <span className='highlight'>the rabbit and turtle?</span></h1>
    <p className='pt-12 pb-6 app__text'>Lorem</p>
    <ul className='list-inside list-disc app__text'>
    <li>Lorem</li>
  
    </ul>
    </div>

    </div>
    </section>
  )
}

export default Prefer