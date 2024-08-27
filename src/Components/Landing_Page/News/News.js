import React from 'react';
import { Link } from 'react-router-dom';


const articles = [
    {
      type: "Destination",
      title: "Discover the Magic of Bali",
      description: "Explore the serene beaches, vibrant culture, and lush landscapes of Bali. Perfect for a relaxing getaway or an adventurous trip.",
      imageUrl: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D",
      author: {
        name: "Sophia Lee",
        profileUrl: "#",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      date: "Jul 22, 2024",
      readTime: "8 min read"
    },
    {
      type: "Travel Tips",
      title: "Top 10 Tips for First-Time Travelers",
      description: "A must-read guide for first-time travelers. Learn how to plan your trip, pack efficiently, and make the most of your journey.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      author: {
        name: "Liam Johnson",
        profileUrl: "#",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      date: "Aug 01, 2024",
      readTime: "5 min read"
    },
    {
      type: "Travel Story",
      title: "An Unforgettable Journey Through the Swiss Alps",
      description: "Join us as we recount a breathtaking journey through the Swiss Alps. From picturesque villages to towering peaks, this is a trip you won't forget.",
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      author: {
        name: "Ava Martinez",
        profileUrl: "#",
        avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      date: "Jun 15, 2024",
      readTime: "10 min read"
    }
  ];
  

const News = () => {
  return (
    <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trending News</h2>
          <div class="w-[250px] h-1 mx-auto mt-4 mb-4 bg-blue-200"></div>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            This is your life and it's ending one minute @ a time...
          </p>
        </div>
        <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={article.imageUrl} alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">{article.type}</a>
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.description}</p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={article.author.profileUrl}>
                      <span className="sr-only">{article.author.name}</span>
                      <img className="w-10 h-10 rounded-full" src={article.author.avatarUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={article.author.profileUrl} className="hover:underline">{article.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.date}>{article.date}</time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div class="flex flex-wrap justify-center gap-6 mt-16 ">
    <a class="relative" href="#">
        <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <Link to="/visa" class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-12 py-2.5 text-base font-bold text-black transition duration-100 hover:bg-blue-500 hover:text-gray-900">Read More</Link>
    
    </a>

</div>


    </div>
  );
};

export default News;
