declare module '*/components/Header' {
  import { FC } from 'react';
  const Header: FC;
  export default Header;
}

declare module '*/components/TextContent' {
  import { FC } from 'react';
  interface TextContentProps {
    title: string;
    content: string;
  }
  const TextContent: FC<TextContentProps>;
  export default TextContent;
}

declare module '*/components/MediumArticles' {
  import { FC } from 'react';
  interface Article {
    title: string;
    excerpt: string;
    link: string;
  }
  interface MediumArticlesProps {
    articles: Article[];
  }
  const MediumArticles: FC<MediumArticlesProps>;
  export default MediumArticles;
}

declare module '*/components/Experience' {
  import { FC } from 'react';
  interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    details: string[];
  }
  interface ExperienceProps {
    experiences: ExperienceItem[];
  }
  const Experience: FC<ExperienceProps>;
  export default Experience;
}

declare module '*/components/Contact' {
  import { FC } from 'react';
  interface SocialLink {
    icon: string;
    label: string;
    url: string;
  }
  interface ContactProps {
    socialLinks: SocialLink[];
  }
  const Contact: FC<ContactProps>;
  export default Contact;
} 