import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  const handleDelete = async (id) => {
  const { error } = await supabase
    .from('creators')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting creator:', error);
    alert('Failed to delete.');
  } else {
    // Remove the deleted creator from the list
    setCreators(prevCreators => prevCreators.filter(c => c.id !== id));
  }
};


  return (
    <div>
      <h1>Our Creators</h1>

      {/* Add button here */}
      <div style={{ margin: '20px 0' }}>
        <Link to="/add">
          <button>Add New Creator</button>
        </Link>
      </div>

      {/* Render each creator */}
      <div className="creator-grid" style={{color:"#1E90FF;"}}>
  {creators.map((creator) => (
    <CreatorCard
      key={creator.id}
      id={creator.id}
      name={creator.name}
      url={creator.url}
      description={creator.description}
      imageURL={creator.imageURL}
      onDelete={handleDelete}
    />
  ))}
</div>
    </div>
  );
}

export default ShowCreators;