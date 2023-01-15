import prisma from 'lib/prisma'

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Welcome To TicLet</h1>
          <p className="py-6">Get started by login into your Organization's account.</p>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  )
}