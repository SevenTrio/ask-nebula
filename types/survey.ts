export type Slug = string;
export type Variable = string;

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface Action {
  title: string;
  value?: string | boolean;
}

export interface NextPageCondition {
  fieldToCompare: Variable;
  variants: Record<Variable, Slug>;
}

export interface PageConfig {
  slug: Slug;
  header: string;
  description?: string;
  isSpecialPage?: boolean;
  actions: Action[];
  saveAnswerTo?: Variable;
  nextPage?: Slug;
  nextPageCondition?: NextPageCondition;
}

export type SurveyConfig = Record<Slug, PageConfig>;
