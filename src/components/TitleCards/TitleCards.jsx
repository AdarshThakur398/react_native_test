import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TitleCards.css';

const TitleCards = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setShows(data.map(item => item.show));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="titlecards">
      <h2 className="text">Popular Shows</h2>
      <div className="card-list">
        {shows
          .filter(show => show.image) 
          .map(show => (
            <div
              className="card"
              key={show.id}
              onClick={() => navigate(`/details/${show.id}`)}
            >
              <img
                src={show.image?.original || 'https://via.placeholder.com/210x295'}
                alt={show.name || 'Show Image'}
              />
              <p>{show.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TitleCards;
