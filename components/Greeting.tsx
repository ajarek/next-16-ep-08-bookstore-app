import { useUser } from "@clerk/nextjs"

const Greeting = () => {
    const { user } = useUser()
  return (
    <section className='animate-in fade-in slide-in-from-bottom-2 duration-700'>
          <h1 className='text-3xl font-serif text-[#4A3A30]'>
           {user?.firstName ? "Good evening, " : "Hello, "} {user?.firstName}
          </h1>
        </section>
  )
}

export default Greeting