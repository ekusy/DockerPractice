'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // localhostをバックエンドPCのIP（例: 192.168.1.XX）に書き換えるのを忘れずに
    fetch('http://localhost:8000/api/data')
      .then(res => res.json())
      .then(data => setMessage(data.items.join(', ')))
      .catch(err => setMessage('Error: ' + err));
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1>Docker Frontend</h1>
      <p>Backend Data: {message}</p>
    </main>
  );
}