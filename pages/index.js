import Link from 'next/link';



export default function Index() {
  
    return (
      <div>
        <Link href="/login">
          <a>login</a>
        </Link>
        <p>index page (to be removed)</p>
      </div>
    );
  }