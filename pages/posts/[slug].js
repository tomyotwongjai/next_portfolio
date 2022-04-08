import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

const posts = ({ post }) => {
  const { input } = useState();
  const markdown = <div dangerouslySetInnerHTML={{ __html: post.body_html }} />;

  return (
    <div>
      <ReactMarkdown children={children}>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </ReactMarkdown>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const json = await res.json();
  return { props: { post: json } };
}

export default posts;
