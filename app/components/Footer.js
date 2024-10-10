
export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-lg font-bold mb-2">Our Address</p>
            <p>1234 Food Street</p>
            <p>Food City, FC 12345</p>
            <p className="mt-4 text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@ourrestaurant.com</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <a href="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a>
            <a href="/menu" className="text-gray-300 hover:text-orange-500 transition-colors">Menu</a>
            <a href="/content" className="text-gray-300 hover:text-orange-500 transition-colors">Content</a>
            <a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a>
            <a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">&copy; 2024 Your Restaurant. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  