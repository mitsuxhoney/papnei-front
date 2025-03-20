import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function AboutImageSlider() {
  const navigate = useNavigate()
  const images = [
    'https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=2942&auto=format&fit=[…]3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <div className="relative h-[28rem] w-full overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      <motion.div
        initial={{ opacity: 1, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex flex-col justify-center items-center absolute inset-0 bg-black/40"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          You Seem Interested About US!
        </motion.p>
        <button className="  ">
          <Button
            size="lg"
            className="relative bg-white text-secondary hover:bg-white/80 flex items-center px-4 py-2 backdrop-blur-sm mx-auto text-center rounded-full mt-4"
            onClick={() => {
              navigate('/contact-us')
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            <p>Schedule a call</p>
            <ArrowRight />
          </Button>

          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </div>
  )
}
