/// <reference types="React" />
declare module "@skiller-webpack/hackernews" {
  interface HackerNewsProps {
    search?: string;
  }
  const HackerNews: React.ComponentType<HackerNewsProps>;
  export default HackerNews;
}
