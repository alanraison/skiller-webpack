/// <reference types="React" />
declare module "@skiller-webpack/reddit" {
  interface RedditProps {
    search?: string;
  }
  const Reddit: React.ComponentType<RedditProps>;
  export default Reddit;
}
