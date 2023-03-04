import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Events() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <Link to="/events/20230305">开源合规安全与艺术</Link>
      </div>
    </Layout>
  );
}