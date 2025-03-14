import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function AboutImageSlider() {
  const navigate = useNavigate()
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <div className="relative h-[30rem] w-full overflow-hidden">
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
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span
            onClick={() => {
              navigate('/contact-us')
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
            className="cursor-pointer"
          >
            Join now →
          </span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </div>
  )
}
