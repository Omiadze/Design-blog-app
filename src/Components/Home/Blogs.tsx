import React from 'react'



const Blogs = ({card}: {
  card: {
    img: string,
    svg: string,
    author: string,
    title: string,
    text: string,
    views: string,
    Comments: string,
    heart: string
}}) => {
return (
  
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-none md:rounded-s-lg" src={card.img} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.text}</p>
    </div>
</a>

)
}

export default Blogs