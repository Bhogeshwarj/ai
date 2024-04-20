
export default function Wip() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 dark:bg-gray-950">
      <div className="space-y-4 text-center animate-fade-in">
       
        <h1 className="text-4xl font-bold text-gray-50 sm:text-5xl md:text-6xl">Coming Soon</h1>
        <p className="text-lg text-gray-400 max-w-md">
          <div>

          We are working hard to bring you something amazing. Stay tuned for updates !
          </div>
        </p>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full border-4 border-gray-400 border-t-transparent h-12 w-12" />
        </div>
      </div>
    </div>
  )
}
