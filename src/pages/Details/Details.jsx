import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const { id } = useParams(); 

  const [showDetails, setShowDetails] = React.useState(null);

  
  React.useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) throw new Error('Failed to fetch show details');
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  
  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1>{showDetails.name}</h1>
      <img
        src={showDetails.image?.original}
        alt={showDetails.name}
        className="details-image"
      />
      <p>
        <strong>Genres:</strong> {showDetails.genres.join(', ')}
      </p>
      <p>
        <strong>Language:</strong> {showDetails.language}
      </p>
      <p>
        <strong>Status:</strong> {showDetails.status}
      </p>
      <p>
        <strong>Premiered:</strong> {showDetails.premiered}
      </p>
      <p>
        <strong>Rating:</strong> {showDetails.rating?.average || 'N/A'}
      </p>
      <p dangerouslySetInnerHTML={{ __html: showDetails.summary }}></p>
      {showDetails.officialSite ? (
    <a href={showDetails.officialSite} target="_blank" rel="noopener noreferrer">
        Official Site
    </a>
) : (
    <p>No official site available.</p>
)}
    </div>
  );
};

export default Details;
