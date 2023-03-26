import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Sidebar = ({ document, docId, chapter }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h5>Table of contents</h5>
      </div>
      <div className="sidebar__content">
        <Link to="/">
          <div className="d-flex align-items-center mb-2">
            <AiOutlineArrowLeft /> <span>Back to search</span>
          </div>
        </Link>
        <p className="sidebar__title">{document?.title}</p>
        <ul className="sidebar__nav">
          {document &&
            document.chapters.map((chap, i) => (
              <li key={i} className={chap.content === chapter ? "active" : ""}>
                <Link to={`/${docId}/${chap.content}`}>{chap.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
