import { cn } from "../lib/utils"

const Wrapper = ({ children, className }) => {
  return <div className={cn('px-6 md:px-14', className)}>{children}</div>
}

export default Wrapper
