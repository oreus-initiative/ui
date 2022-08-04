// Generated with util/create-component.js
import React from "react";

import { SitemapProps } from "./Sitemap.types";

import "./Sitemap.scss";

const Sitemap: React.FC<SitemapProps> = ({
  sitemap,
  baseUrl,
  className,
  style,
}) => {
  const isExternalLink = (link: string) => {
    return baseUrl ? link.localeCompare(baseUrl) !== 0 : true;
  };

  return (
    <div
      data-testid="Sitemap"
      className={`oreus-sitemap ${className || ""}`}
      style={style}
    >
      {sitemap.map((category, index) => (
        <div
          className="oreus-sitemap-category"
          key={`category_${category.title}_${index}`}
        >
          <strong>{category.title}</strong>
          <ul className="oreus-sitemap-category-list">
            {category.items.map((item, index) => (
              <li
                key={`item_${item.title}_${index}`}
                className="oreus-sitemap-category-list-item"
              >
                <a
                  href={item.href}
                  target={isExternalLink(item.href) ? "_blank" : undefined}
                  rel={isExternalLink(item.href) ? "noreferrer" : undefined}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sitemap;
