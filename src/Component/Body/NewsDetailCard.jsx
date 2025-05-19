import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetailcard = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [newsdetail, setNewsDetail] = useState(null);

  useEffect(() => {
    const selectedNews = data.find(singlenews => singlenews.id === id);
    if (selectedNews) {
      setNewsDetail(selectedNews);
    }
  }, [id, data]);

  if (!newsdetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card w-full bg-base-100 shadow-md border border-gray-200 rounded-lg">
      {/* Thumbnail Image */}
      <figure className="px-4 pt-4">
        <img
          src={newsdetail.thumbnail_url}
          alt={newsdetail.title}
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-xl font-bold text-gray-800">
          {newsdetail.title}
        </h2>
      </div>

      {/* Body: Date, Tags, Description */}
      <div className="card-body p-4 pt-2">
        <p className="text-sm text-gray-600">
          {new Date(newsdetail.author.published_date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}{' '}
          | <span className="font-semibold">Tag Cloud Tags:</span>{' '}
          {newsdetail.tags.join(', ')}
        </p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-4">{newsdetail.details}</p>

        {/* Category Link */}
        <Link
          to={`/newscategory/${newsdetail.category_id}`}
          className="inline-block mt-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
        >
          ← All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailcard;