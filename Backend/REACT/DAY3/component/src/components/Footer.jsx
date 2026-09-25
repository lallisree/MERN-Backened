import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 px-6 py-12 text-gray-300">
  <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
    <section>
      <h3 className="mb-4 font-semibold text-white">Quick links</h3>
        <p>Home</p>
         <p>Menu</p>
         <p>Services</p>
         <p>About Us</p>
         <p>Contact Us</p>
    </section>

    <section>
      <h3 className="mb-4 font-semibold text-white">Information</h3>
         <p>our story</p>
         <p>blog</p>
         <p>press</p>
    </section>

    <section>
      <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
         <p>123 foodie orgamic</p>
         <p>lallisree5@gmail.com</p>
         <p>94891-31570</p>
         <p>Mon-Sun 9:00AM to 10:00PM</p>
    </section>
  </div>

  <p className="mx-auto mt-10 max-w-6xl border-t border-gray-700 pt-6 text-sm">
    © 2026 My store. All rights reserved.
  </p>
</footer>
      
    </div>
  )
}

export default Footer
