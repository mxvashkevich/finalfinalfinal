import { Tag } from "../tag.model";

export const tagProviders = [
  {
    provide: 'TAG_REPOSITORY',
    useValue: Tag,
  },
];