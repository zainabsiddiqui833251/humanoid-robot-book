import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/">
            Start Reading the Book
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--xl">
          <div className="row">
            <div className="col col--10 col--offset-1 text--center">
              <Heading as="h2">About "Humanoid Robots: A Comprehensive Guide"</Heading>
              <p>
                Dive into the fascinating world of humanoid robotics with this comprehensive guide.
                From fundamental kinematics and dynamics to advanced AI and human-robot interaction,
                this book covers essential concepts, practical code examples, and ethical considerations.
                Whether you're a student, researcher, or enthusiast, you'll find valuable insights to build,
                control, and understand the next generation of human-like machines.
              </p>
              <p>
                Explore detailed chapters on perception, actuation, path planning, and cutting-edge machine learning
                techniques used to bring humanoids to life. Featuring Python and ROS examples, step-by-step tutorials,
                and an interactive chatbot, this resource is designed to accelerate your learning journey.
              </p>
              <Link
                className="button button--primary button--lg margin-top--md"
                to="/docs/introduction/">
                Start Your Robotics Journey
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
