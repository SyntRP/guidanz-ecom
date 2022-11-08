import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items, title }) => {
  return (
    <div className="my-4 lg:my-6">
      <nav className="rounded-md w-full">
        <ol className="list-reset flex flex-wrap">
          <li>
            <Link to="/" className="text-primary-500 hover:text-primary-600">
              Home
            </Link>
          </li>
          {items?.length > 0 &&
            items.map((item, i) => (
              <li key={i}>
                <span className="text-gray-500 mx-2">/</span>
                <Link
                  to="#"
                  className="text-primary-500 hover:text-primary-600"
                >
                  {item}
                </Link>
              </li>
            ))}
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li className="text-black capitalize">{title}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
