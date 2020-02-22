import Link from 'next/link';

export default function Home() {
    return (
      <div>
        <Link href="/jobsearch">
          <a>Job Search</a>
        </Link>
        <Link href="/applications">
          <a>Applications</a>
        </Link>
        <Link href="/messages">
          <a>Messages</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <p>Hello Home.js</p>
        <DataSearch
            componentId="SearchSensor"
            dataField={["original_title"]}
            queryFormat="and"
            autosuggest={false}
            filterLabel="search"
            URLParams={true}
        />
      </div>
    );
  }
  