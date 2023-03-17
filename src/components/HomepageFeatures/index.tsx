import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '译道师',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Link       
        to="/yidaoshi" >
          LF APAC 译道师团队作品。
      </Link>
    ),
  },
  {
    title: '大咖专栏',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        开源大咖作品。
      </>
    ),
  },
  {
    title: '专题',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Link
            className="button button--secondary button--lg"
            to="/docs/gpl/gplv1">
            开源专题
        </Link>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
