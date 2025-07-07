import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    }

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('creators')
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating creator:', error);
    } else {
      alert('Creator updated!');
      navigate('/'); // redirect to home or use `/creators/${id}`
    }
  };

  return (
    <div>
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
          placeholder="URL"
        />
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCreator;
