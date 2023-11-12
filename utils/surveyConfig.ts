import { Gender, PageConfig, Slug, SurveyConfig } from '@/types/survey';

const config: SurveyConfig = {
  gender: {
    slug: 'gender',
    header: 'Select your gender:',
    actions: [
      { title: 'Female', value: Gender.FEMALE },
      { title: 'Male', value: Gender.MALE },
    ],
    saveAnswerTo: 'gender',
    nextPage: 'relationship-status',
  },
  'relationship-status': {
    slug: 'relationship-status',
    header:
      'So we can get to know you better, tell us about your relationship status.',
    actions: [
      { title: 'Single', value: true },
      { title: 'In a relationship', value: false },
    ],
    saveAnswerTo: 'isSingle',
    nextPageCondition: {
      fieldToCompare: 'isSingle',
      variants: {
        true: 'single-flow',
        false: 'relationship-flow',
      },
    },
  },
  'single-flow': {
    slug: 'single-flow',
    header: 'Are you a single parent?',
    actions: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
    saveAnswerTo: 'isParent',
    nextPage: 'single-problem',
  },
  'single-problem': {
    slug: 'single-problem',
    header:
      'Single {{ gender }} {{ whoHaveChildren }} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
    actions: [
      { title: 'I was unhappy with low things were going in my relationship' },
      {
        title:
          'I was unhappy with parts of my relationship, but some thing were working',
      },
      { title: 'I was generally happy with my relationship' },
      { title: 'I’ve never been in a relationship' },
    ],
    saveAnswerTo: 'singleProblem',
    nextPage: 'traits-tend-to-overthink',
  },
  'traits-tend-to-overthink': {
    slug: 'traits-tend-to-overthink',
    header: 'Do you tend to overthink?',
    actions: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
    saveAnswerTo: 'traitsTendToOverthink',
    nextPage: 'what-is',
  },
  'what-is': {
    slug: 'what-is',
    header: 'So how does it work?',
    description:
      'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
    actions: [{ title: 'Next' }],
    nextPageCondition: {
      fieldToCompare: 'traitsTendToOverthink',
      variants: {
        true: 'traits-most-important',
        false: 'traits-emotional-control',
      },
    },
  },
  'traits-most-important': {
    slug: 'traits-most-important',
    header: 'What is most important to you?',
    actions: [
      { title: 'Success' },
      { title: 'Romance' },
      { title: 'Stability' },
      { title: 'Freedom' },
    ],
    saveAnswerTo: 'traitsMostImportant',
    nextPage: 'about-us',
  },
  'traits-emotional-control': {
    slug: 'traits-emotional-control',
    header: 'Is emotional control tricky for you?',
    actions: [
      { title: 'Yes' },
      { title: 'Sometimes' },
      { title: 'Rarely' },
      { title: 'Not at all' },
    ],
    saveAnswerTo: 'traitsEmotionalControl',
    nextPage: 'about-us',
  },
  'relationship-flow': {
    slug: 'relationship-flow',
    header: 'Are you a parent?',
    actions: [
      { title: 'Yes', value: true },
      { title: 'No', value: false },
    ],
    saveAnswerTo: 'isParent',
    nextPage: 'relationship-problem',
  },
  'relationship-problem': {
    slug: 'relationship-problem',
    header:
      '{{ gender }} {{ whoHaveChildren }} need a slightly different approach to improve their relationship. Which statement best describes you?',
    actions: [
      {
        title: 'I’m very unhappy with how things are going in my relationship',
      },
      {
        title:
          'I’m unhappy with parts of my relationship, but some things are working well',
      },
      { title: 'I’m generally happy in my relationship' },
    ],
    saveAnswerTo: 'relationshipProblem',
    nextPage: 'partner-introvert-or-extrovert',
  },
  'partner-introvert-or-extrovert': {
    slug: 'partner-introvert-or-extrovert',
    header: 'Is your partner an introvert or extrovert?',
    actions: [
      { title: 'Introvert' },
      { title: 'Extrovert' },
      { title: 'A bit of both' },
    ],
    saveAnswerTo: 'partnerIntrovertOrExtrovert',
    nextPage: 'partner-gender',
  },
  'partner-gender': {
    slug: 'partner-gender',
    header: 'What is your partner’s gender?',
    actions: [
      { title: 'Male', value: Gender.MALE },
      { title: 'Female', value: Gender.FEMALE },
    ],
    saveAnswerTo: 'partnerGender',
    nextPage: 'partner-priority',
  },
  'partner-priority': {
    slug: 'partner-priority',
    header: 'Do you agree with the statement below?',
    description: '“My partner and I make sex a priority in our relationship”',
    actions: [
      { title: 'Strongly agree' },
      { title: 'Agree' },
      { title: 'Neutral' },
      { title: 'Disagree' },
      { title: 'Strongly disagree' },
    ],
    saveAnswerTo: 'partnerPriority',
    nextPage: 'think-about-relationship-goals',
  },
  'think-about-relationship-goals': {
    slug: 'think-about-relationship-goals',
    header: 'When you think about your relationship goals, you feel...?',
    actions: [
      { title: 'Optimistic! They are totally doable, with some guidance.' },
      { title: 'Cautious. I’ve struggled before, but I’m hopeful.' },
      { title: 'I’m feeling a little anxious, honestly.' },
    ],
    saveAnswerTo: 'relationshipGoals',
    nextPage: 'about-us',
  },
  'about-us': {
    slug: 'about-us',
    header: 'Where did you hear about us?',
    actions: [
      { title: 'Poster or Billboard' },
      { title: 'Friend or Family' },
      { title: 'Instagram' },
      { title: 'Direct Mail or Package Insert' },
      { title: 'Online TV or Streaming TV' },
      { title: 'TV' },
      { title: 'Radio' },
      { title: 'Search Engine (Google, Bing, etc.)' },
      { title: 'Newspaper or Magazine' },
      { title: 'Facebook' },
      { title: 'Blog Post or Website Review' },
      { title: 'Podcast' },
      { title: 'Influencer' },
      { title: 'Youtube' },
      { title: 'Pinterest' },
      { title: 'Other' },
    ],
    saveAnswerTo: 'aboutUs',
  },
};

export const getSurveyConfig = (): SurveyConfig => {
  return config;
};

export const getSurveyPage = (pageSlug?: Slug): PageConfig | null => {
  if (!pageSlug || !config[pageSlug]) {
    return null;
  }

  return config[pageSlug];
};
