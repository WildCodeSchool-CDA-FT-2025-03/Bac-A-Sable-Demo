import type { Languages } from "../languages/languages.type";

export type Repos = {
  id: string;
  isPrivate: boolean;
  url: string;
  languages: Languages[];
};
