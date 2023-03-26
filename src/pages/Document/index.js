import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchChapterContent, fetchDocumentById } from "api/documents";
import Sidebar from "components/Sidebar";
import Layout from "layout/Layout";
import Loader from "components/Loader";
import HtmlRenderer from "components/HtmlRenderer";
import Notfound from "components/Notfound";

const Document = () => {
  let { id, chapter } = useParams();
  const [document, setDocument] = useState();
  const [contents, setContents] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // Fetch documents by id
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const document = await fetchDocumentById(id);
        setDocument(document);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // Fetch chapter contents from documents
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const chapterContent = await fetchChapterContent(chapter);
        setContents(chapterContent);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [chapter]);

  return (
    <Layout>
      <Sidebar document={document} docId={id} chapter={chapter} />
      <div className="main-content">
        <section className="content-section">
          {error ? (
            <Notfound message="Content not found" />
          ) : !loading ? (
            <HtmlRenderer contents={contents} />
          ) : (
            <Loader />
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Document;
