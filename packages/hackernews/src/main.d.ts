/// <reference types="React" />
declare module "@skiller-webpack/main/JsonFetcher" {
  const JsonFetcher: React.ComponentType<{
    url: string;
    children: ({ loading: boolean, error: Error, data }) => React.Element
  }>;
  export default JsonFetcher;
}
declare module "@skiller-webpack/main/Card" {
  const Card: React.ComponentType<React.PropsWithChildren<{
    icon: string;
    title: string;
    colour: string;
  }>>;
  export default Card;
}
