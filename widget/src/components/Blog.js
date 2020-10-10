import React, { useState } from "react";

const Blog = ({ items }) => {
  const [activeidex, setActiveindex] = useState(null);
  const OnTitleclick = (index) => {
    setActiveindex(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeidex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => OnTitleclick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Blog;
