import { Link } from 'react-router-dom';

const Page404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' , height: '100vh'}}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>404 Not Found</p>
    <Link
      style={{
        display: 'block',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',
      }}
      to="/"
    >
        Back to main page
    </Link>
  </div>
);

export default Page404;
