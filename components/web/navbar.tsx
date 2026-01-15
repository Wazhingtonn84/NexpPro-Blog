import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const Navbar = () => {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-3xl font-bold">
          Next<span className='text-blue-500'>Pro</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link className={buttonVariants({variant: "ghost"})}  href="/">Home</Link>
          <Link className={buttonVariants({variant: "ghost"})} href="/blog">Blog</Link>
          <Link className={buttonVariants({variant: "ghost"})} href="/create">Create</Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link className={buttonVariants()} href="/auth/login">Login</Link>
        <Link className={buttonVariants({variant: "outline"})} href="/auth/signup">Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar
