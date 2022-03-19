import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
           <h1 className="text-6xl absolute top-10  font-extrabold text-violet-500">Animated Blurry Background Shapes</h1>
      <div className="bg-gray-50 w-full  flex items-center justify-center px-16">
  <div className="relative w-full max-w-xl">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="m-8 relative space-y-4">
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-48 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-56 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-44 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
