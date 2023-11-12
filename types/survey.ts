type Slug = string;
type Variable = string;

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export interface Action {
  title: string;
  value?: string | boolean;
}

export interface NextPageCondition {
  fieldToCompare: Variable;
  variants: Record<Variable, Slug>;
}

export interface BasicPageConfig {
  slug: Slug;
  header: string;
  description?: string;
  isSpecialPage?: boolean;
  actions: Action[];
  saveAnswerTo?: Variable;
}

export type NextPageData =
  | { nextPageCondition?: NextPageCondition }
  | { nextPage?: Slug };

export type PageConfig = BasicPageConfig & NextPageData;

export type SurveyConfig = Record<Slug, PageConfig>;
