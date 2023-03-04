import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from '../index.module.css';
import clsx from 'clsx';

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
        {/* <h1 className='hero__title'>最近活动</h1> */}
        <ul>
          <li>
            <Link to="/events/20230305">开源合规安全与艺术</Link>
          </li>
        </ul>

      </div>
    </Layout>
  );
}