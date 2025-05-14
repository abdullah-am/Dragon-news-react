
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 shadow-md border border-gray-200 rounded-lg">
      {/* Author Section */}
      <div className="flex justify-between items-center p-2 pb-2 bg-base-200">
        <div className="flex items-center p-4 pb-2">
            <img
            src={news.author.img}
            alt={news.author.name}
            className="w-8 h-8 rounded-full mr-2"
            />
            <div>
            <p className="text-sm font-semibold text-gray-800">{news.author.name}</p>
            <p className="text-xs text-gray-500">
                {new Date(news.author.published_date).toISOString().split('T')[0]}
            </p>
            </div>
        </div>
        <div className='flex gap-2'>
            <span><CiBookmark /></span>
            <span><CiShare2 /></span>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="card-title text-xl font-bold text-gray-800 leading-tight">
          {news.title}
        </h2>
      </div>

      {/* Thumbnail Image */}
      <figure className="px-4 py-2">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="rounded-lg w-full h-40 object-cover"
        />
      </figure>

      {/* Body: Date, Tags, Description, Read More */}
      <div className="card-body p-4 pt-2">
        <p className="text-sm text-gray-600">
          {new Date(news.author.published_date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}{' '}
          | <span className="font-semibold">Tag Cloud Tags:</span>{' '}
          {news.tags.join(', ')}
        </p>
        <p className="text-sm text-gray-700 line-clamp-2">{news.details}</p>
        {news.details.length > 200 && (
          <a href="#" className="text-blue-500 hover:underline text-sm font-medium">
            Read More
          </a>
        )}


        {/* Rating and Views */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 bg-yellow-400 ${
                    i < Math.round(news.rating.number) ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                  checked={i === Math.round(news.rating.number) - 1}
                  readOnly
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{news.rating.number}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;