import * as React from 'react';
import { shallow } from 'enzyme';

import PostFetch from '../index';

const siteInfo = {
  title: 'Dmitri Pavlutin',
  description: 'Thoughts on Frontend development',
  metaTitle: 'Dmitri Pavlutin Blog',
  metaDescription: 'Posts by Dmitri Pavlutin about software development',
  url: 'https://dmitripavlutin.com',
  repositoryUrl: 'https://github.com/panzerdp/dmitripavlutin.com',
};

const authorProfilePicture = {
  width: 100,
  height: 100,
  base64: 'base64-encoded-string',
  src: '/image.png',
  srcSet: 'some srcset values',
};

const authorInfo: AuthorInfo = {
  name: 'Dmitri Pavlutin',
  description: 'Dmitri Pavlutin is a software developer specialized in Frontend technologies',
  email: 'mail@mail.com',
  jobTitle: 'Software developer',
  profiles: {
    stackoverflow: 'https://stackoverflow.com/users/1894471/dmitri-pavlutin',
    twitter: 'https://twitter.com/panzerdp',
    linkedin: 'https://www.linkedin.com/in/dmitri-pavlutin/',
    github: 'https://github.com/panzerdp',
    facebook: 'https://www.facebook.com/dmitri.pavlutin',
  },
  nicknames: {
    twitter: 'panzerdp',
  },
};

const props = {
  data: {
    site: {
      siteMetadata: {
        siteInfo,
        authorInfo,
      },
    },
    authorProfilePicture: {
      childImageSharp: {
        resize: authorProfilePicture,
      },
    },
    recommendedPosts: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Useful techniques to facilitate React server-side rendering',
              description: 'Useful techniques to facilitate React server-side rendering.',
              published: '2018-03-17',
              modified: '2019-01-01',
              commentsThreadId: 'thread-id',
              slug: 'useful-techniques-react-server-side-rendering',
              tags: ['react', 'server side rendering'],
              thumbnail: {
                childImageSharp: {
                  fixed: {
                    src: 'src',
                    srcSet: 'src-set',
                    width: 100,
                    height: 100,
                    base64: '',
                    srcWebp: 'src-webp',
                    srcSetWebp: 'srcset-webp',
                  },
                },
              },
            },
          },
        },
      ],
    },
    popularPosts: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Useful techniques to facilitate React server-side rendering',
              description: 'Useful techniques to facilitate React server-side rendering.',
              published: '2018-03-17',
              modified: '2019-01-01',
              commentsThreadId: 'thread-id',
              slug: 'useful-techniques-react-server-side-rendering',
              tags: ['react', 'server side rendering'],
              thumbnail: {
                childImageSharp: {
                  fixed: {
                    src: 'src',
                    srcSet: 'src-set',
                    width: 100,
                    height: 100,
                    base64: '',
                    srcWebp: 'src-webp',
                    srcSetWebp: 'srcset-webp',
                  },
                },
              },
            },
          },
        },
      ],
    },
    markdownRemark: {
      id: 'post-id',
      html: '<div>JavaScript is a programming language</div>',
      fileAbsolutePath: '/home/test/user/my-post.md',
      frontmatter: {
        title: 'Useful techniques to facilitate React server-side rendering',
        description: 'Useful techniques to facilitate React server-side rendering.',
        published: '2018-03-17',
        modified: '2019-01-01',
        commentsThreadId: 'thread-id',
        slug: 'useful-techniques-react-server-side-rendering',
        tags: ['react', 'server side rendering'],
        recommended: ['javascript-language'],
        thumbnail: {
          childImageSharp: {
            fluid: {
              src: 'source',
              base64: 'base64',
              aspectRatio: 2,
              srcSet: 'src-set',
              sizes: 'some sizes',
              srcWebp: 'src-webp',
              srcSetWebp: 'src-set-webp',
            },
          },
        },
      },
    },
  },
};

describe('<PostFetch />', function() {
  it('should render post template', function() {
    const wrapper = shallow(<PostFetch {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
