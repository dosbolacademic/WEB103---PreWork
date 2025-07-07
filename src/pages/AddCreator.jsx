import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('creators')
      .insert([creator]);

    if (error) {
      console.error('Error adding creator:', error);
      alert('Failed to add creator');
    } else {
      alert('Creator added!');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Add New Creator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
          placeholder="URL"
          required
        />
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
