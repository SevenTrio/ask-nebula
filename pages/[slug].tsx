import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import classNames from 'classnames';
import { Button } from '@/components/button';
import { PageConfig } from '@/types/survey';
import { getSurveyConfig, getSurveyPage } from '@/utils/surveyConfig';
import styles from '@/styles/Survey.module.css';

export const getStaticPaths = (async () => {
  const surveyConfig = getSurveyConfig();
  const slugs = Object.keys(surveyConfig);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const pageSlug = context.params?.slug;
  const pageConfig = getSurveyPage(pageSlug);
  return { props: { pageConfig } };
}) satisfies GetStaticProps<
  {
    pageConfig: PageConfig | null;
  },
  {
    slug: string;
  }
>;

export default function SurveyPage({
  pageConfig,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!pageConfig) return null;

  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      <Head>
        <title>Ask Nebula</title>
        <meta name="description" content="Find the answers to your questions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['content-wrapper']}>
        <div className={styles['content-container']}>
          <div
            className={classNames(styles['text-container'], {
              [styles['text-container--special']]: pageConfig.isSpecialPage,
            })}
          >
            <h2>{pageConfig.header}</h2>
            {pageConfig.description && <p>{pageConfig.description}</p>}
          </div>
          <div className={styles['actions-container']}>
            {pageConfig.actions.map((action) => (
              <Button
                isPrimary={pageConfig.isSpecialPage}
                key={action.title}
                onClick={() => handleClick()}
              >
                {action.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
