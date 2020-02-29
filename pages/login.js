import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <div>
      <Link href="/home">
        <a>Home Page</a>
        </Link>
      <p>Hello Login.js</p>
    </div>
  );
}
