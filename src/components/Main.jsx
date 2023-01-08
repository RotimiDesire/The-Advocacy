import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../styles/Main.css";

export default function Main() {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Successfully logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main>
      <nav>
        <div className="left-nav">
          <img
            src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h2>The Advocacy</h2>
        </div>

        <div className="right-nav">
          <h3>
            Username: <span className="user"> {user && user.email}</span>
          </h3>
          <button onClick={handleLogout} className="button">
            Sign Out
          </button>
        </div>
      </nav>

      <section>
        <div>
          <h2>Preaching The Gospel Of The Alt School Africa.</h2>
          <p>Africa's fastest growing University.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </section>
      <aside>
        <h2>
          Kickstart a career in tech by choosing to major in any of the
          following;
        </h2>
        <div className="majors">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/data-analysis-symbol-icon-152986471.jpg"
              alt=""
            />
            <h3>Data Analysis</h3>
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/black-data-analysis-concept-icon-logo-white-background-black-data-analysis-concept-icon-logo-130623467.jpg"
              alt=""
            />
            <h3>Data Science</h3>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/662/132/original/growth-product-icon-operational-excellence-symbol-cost-efficiency-sign-for-your-web-site-design-logo-app-ui-illustration-free-vector.jpg"
              alt=""
            />
            <h3>Product Design</h3>
          </div>
          <div>
            <img
              src="https://previews.123rf.com/images/surfupvector/surfupvector1904/surfupvector190400941/120805109-product-research-line-icon-marketing-presentation-advertising-abstract-product-concept-vector-illust.jpg"
              alt=""
            />
            <h3>Product Marketing</h3>
          </div>
          <div>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/background-management-series-icon-fill/product-management-10.png"
              alt=""
            />
            <h3>Product Management</h3>
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/black-hacker-software-engineer-symbol-white-background-concept-depicting-danger-using-internet-protection-co-117453507.jpg"
              alt=""
            />
            <h3>Software Engineering</h3>
          </div>
        </div>
      </aside>
      <h3>
        <a
          href="https://www.altschoolafrica.com"
          className="real"
          target="_blank"
        >
          The real stuff happens here...
        </a>
      </h3>
      <footer>
        <h3>The Advocacy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          obcaecati aperiam assumenda molestiae doloribus eius beatae quos
          aspernatur inventore nostrum minus quia illo culpa reprehenderit, at
          expedita rem eaque animi. Aliquam minus temporibus iusto veritatis
          possimus illum quaerat vitae. Hic, facere repudiandae molestias magnam
          aspernatur repellat facilis perspiciatis quae ipsa eos nisi sequi quod
          distinctio exercitationem maiores doloremque harum velit?
        </p>
        <p className="copy">Copyright &copy;2023</p>
      </footer>
    </main>
  );
}
