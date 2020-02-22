import Link from 'next/link';

export default function Messages() {
    return (
      <div>
        <Link href="/peoplesearch">
          <a>Search People</a>
        </Link>
        <p>Hello Messages.js</p>
      </div>
    );
  }
  