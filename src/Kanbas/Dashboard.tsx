import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160}  alt="picture" />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/Science.jpg" width="100%" height={160} alt="picture" />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 Science Class
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Reasearch Class
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/Cook.jpg" width="100%" height={160} alt="picture" />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 Cooking Class
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Culinary Class
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/English2.jpg" width="100%" height={160} alt="picture"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 English 1
              </h5>
              <p className="wd-dashboard-course-title card-text">
                English 101
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/History2.jpg" width="100%" height={160} alt="picture"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 History 1
              </h5>
              <p className="wd-dashboard-course-title card-text">
                History 101
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/math.jpg" width="100%" height={160} alt="picture"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 Math 1
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Jazz
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/Art2.jpg" width="100%" height={160} alt="picture"/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 Art 1
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Art 101
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}
