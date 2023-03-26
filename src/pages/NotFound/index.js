import Layout from "layout/Layout";
import Notfound from "components/Notfound";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound = () => {
  return (
    <Layout>
      <div className="main-content">
        <section className="content-section">
          <Notfound message="Oops, could not find the page !!" />
          <Link to="/">
            <div className="d-flex align-items-center mb-2">
              <AiOutlineArrowLeft /> <span>Back to search</span>
            </div>
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default NotFound;
