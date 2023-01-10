import ContentLoader from "react-content-loader";

const QuoteLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={800}
    viewBox="0 0 1200 800"
    backgroundColor="rgba(255, 255, 255, 0.1)"
    foregroundColor="rgba(255, 255, 255, 0.3)"
  >
    <rect x="140" y="100" rx="10" ry="10" width="330" height="20" />
    <rect x="140" y="66" rx="10" ry="10" width="500" height="20" />
    <rect x="140" y="135" rx="10" ry="10" width="200" height="20" />
    <rect x="140" y="325" rx="10" ry="10" width="530" height="45" />
    <rect x="140" y="395" rx="10" ry="10" width="650" height="191" />
    <rect x="140" y="610" rx="10" ry="10" width="228" height="53" />
  </ContentLoader>
);

export default QuoteLoader;
