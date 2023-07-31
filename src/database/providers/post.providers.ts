import { Post } from "../post.model";

export const tagProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: Post,
  },
];