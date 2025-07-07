import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function CreatorCard({ creator }) {
  return (
    <main className="container">
      <article style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "var(--card-background-color, #fff)",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#1E90FF" }} >{creator.name}</h2>
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "1rem"
          }}
        />
        <p style={{ color: "#000000" }}>{creator.description}</p>
        <a
          href={creator.url}
          className="button primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Creator's Site
        </a>
      </article>
    </main>
  );
}

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

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

  if (!creator) {
    return (
      <main className="container">
        <p>Loading...</p>
      </main>
    );
  }

  return <CreatorCard creator={creator} />;
}

export default ViewCreator;
