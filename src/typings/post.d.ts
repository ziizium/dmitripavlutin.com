interface PostPlain {
  title: string;
  description: string;
  published: string;
  modified: string;
  slug: string;
  tags: Tags;
  commentsThreadId: string | undefined;
}

interface PostExcerpt extends PostPlain {
  thumbnail: FluidImage;
}

interface PostPreview extends PostPlain {
  thumbnail: FixedImage;
}

interface Post extends PostExcerpt {
  html: string;
  recommended: string[];
}
