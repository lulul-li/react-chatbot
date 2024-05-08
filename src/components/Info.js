import React from "react";
import "../Styles/Info.css";
import { articles } from "../data/Articles";
import ArticleCards from "./ArticleCards";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Understanding Postpartum Depression</span>
        </h3>
        <p className="info-description">
          Dive into the truth about postpartum depression—it's more than just mood swings. This article delves into the symptoms, impacts, and seeking help for postpartum depression. Let's uncover and debunk myths surrounding postpartum depression, providing support and guidance for healthier mothers and families.
        </p>
      </div>

      <div className="info-cards-content">
        {React.Children.toArray(
          articles.map(({title,img,contain,url}) => (
            <ArticleCards title={title} img={img} contain={contain} url={url}></ArticleCards>
          ))
        )}
      </div>
    </div>
  );
}

export default Info;
