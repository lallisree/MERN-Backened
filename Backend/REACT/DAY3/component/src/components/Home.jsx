import React from 'react'

const Home = () => {
  return (
    <div>
   <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
  <div>
    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
      Healthy organic Food
    </h1>

    <p className="mt-5 leading-7 text-gray-600">
      Fresh, wholesome food for you and your family.
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Explicabo, expedita.
      Lorem ipsum dolor site Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Eligendi, natus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Assumenda a dignissimos quod placeat, obcaecati eos ab,
      nihil quis temporibus doloremque veniam quam quia eveniet.
      Maxime accusamus facere nulla praesentium ducimus.
    </p>

    <button className="mt-8 rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
      Shop Now
    </button>
  </div>

  <img
    src="https://i.pinimg.com/1200x/17/51/39/175139fee4ab5050c15347f075f0abe0.jpg"
    alt="Fresh organic produce"
    className="h-80  w-1000 object-cover sm:h-96"
  />
</section>
      
    </div>
  )
}

export default Home
