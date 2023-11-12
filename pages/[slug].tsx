import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { PageConfig } from '@/types/survey';
import { getSurveyConfig, getSurveyPage } from '@/utils/surveyConfig';
import { SurveyPageComponent } from '@/pageComponents/survey/Survey';
import {
  SurveyPageParams,
  SurveyPageProps,
} from '@/pageComponents/survey/Survey.types';

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
  const pageConfig = getSurveyPage(pageSlug) as PageConfig;
  return { props: { pageConfig } };
}) satisfies GetStaticProps<SurveyPageProps, SurveyPageParams>;

export default function SurveyPage({ pageConfig }: SurveyPageProps) {
  return (
    <>
      <Head>
        <title>Ask Nebula</title>
        <meta name="description" content="Find the answers to your questions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SurveyPageComponent pageConfig={pageConfig} />
    </>
  );
}
