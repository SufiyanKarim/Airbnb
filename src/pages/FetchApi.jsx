import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FetchApi = () => {
  const [articles, setArticles] = useState([]);
  const fetchApi = 'https://newsapi.org/v2/everything?q=apple&from=2024-10-07&to=2024-10-07&sortBy=popularity&apiKey=b6a0bfe1150a4290860d82ff5f2f25a1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchApi);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Tesla News</h1>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {articles.map((article, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg">
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>

              {article.urlToImage && (
                <Slider {...settings} className="mb-4">
              
                  <div>
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4" />
                  </div>
                  <div>
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4" />
                  </div>
                  <div>
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4" />
                  </div>
                  <div>
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4" />
                  </div>
                  <div>
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4" />
                  </div>
                </Slider>
              )}

              <p className="text-gray-700 mb-4">{article.description}</p>
              <p><strong>Article ID:</strong> {article.source.id || 'N/A'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default FetchApi;
