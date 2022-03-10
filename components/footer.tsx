const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img src="/react-bricks-icon.svg" alt="React Bricks" className="w-8" />
          <div className="uppercase text-sm text-gray-200 tracking-wider">Next.js website starter</div>
        </div>
        <div className="text-gray-200 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com" className="hover:text-lime-600">
            Build with ReactBricks
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
