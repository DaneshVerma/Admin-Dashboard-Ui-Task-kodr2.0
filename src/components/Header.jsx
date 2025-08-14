import { BellIcon } from "@heroicons/react/24/outline";

export default function Header({ toggleSidebar }) {
  return (
    <header className='flex items-center justify-between bg-white dark:text-white dark:bg-gray-900 p-4 shadow-md sticky top-0 z-50'>
      <button
        onClick={toggleSidebar}
        className='md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700'
      >
        <span className='material-icons'>menu</span>
      </button>
      <input
        type='search'
        placeholder='Search...'
        className='rounded-md border border-gray-300 px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500 transition'
      />
      <div className='flex items-center space-x-4'>
        <button className='relative p-2 hover:text-green-500 transition'>
          <span className='material-icons text-2xl'><BellIcon className="w-6 h-6" /></span>
          <span className='absolute top-0 right-1 block w-3 h-3 bg-red-600 rounded-full animate-pulse'></span>
        </button>
        <img
          src='https://i.pravatar.cc/40'
          alt='User Avatar'
          className='w-10 h-10 rounded-full ring-2 ring-green-500'
        />
      </div>
    </header>
  );
}
