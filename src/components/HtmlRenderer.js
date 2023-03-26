const HtmlRenderer = ({ contents }) => {
  return <div dangerouslySetInnerHTML={{ __html: contents }} />;
};

export default HtmlRenderer;
