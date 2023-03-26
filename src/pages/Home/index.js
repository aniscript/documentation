import React, { useState, useEffect } from "react";
import Line from "components/Line";
import SearchInput from "components/SearchInput";
import SearchResult from "components/SearchResult";
import { fetchDocuments } from "api/documents";
import Loader from "components/Loader";
import Layout from "layout/Layout";
import Notfound from "components/Notfound";

const Home = () => {
  const [documents, setDocuments] = useState();
  const [loading, setLoading] = useState(false);

  // Fetch all documents
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const documents = await fetchDocuments();
        setDocuments(documents);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Function to check for chapters in documents
  const hasChapters = (document) => {
    return document && document.chapters && document.chapters.length > 0;
  };

  return (
    <Layout>
      <div className="main-content">
        <section className="content-section">
          <SearchInput />
          <div className="search__results">
            <h5>Search results</h5>
            <Line background="#1F2023" height="1px" />
            <div className="search__results__list">
              {!loading ? (
                documents ? (
                  Object.entries(documents).map(
                    ([key, document]) =>
                      hasChapters(document) && (
                        <SearchResult
                          key={key}
                          link={`${key}/${document.chapters[0]?.content}`}
                          title={document.title}
                          description={document.description}
                          id={key}
                        />
                      )
                  )
                ) : (
                  <Notfound message="No Documents found" />
                )
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
