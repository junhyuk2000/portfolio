import React from "react";
import "../../styles/components/Footer.css"

export default function Footer() {
  return( 
  <div className="footer">
    <div className="footer_link">
      <div><a href="https://github.com/junhyuk2000"><img src="/images/github.svg" alt="" /></a></div>
      <div><a href="https://green-debt-775.notion.site/front-2797f54e231d80d68137d5325ef08c0c"><img src="/images/notion.svg" alt="" /></a></div>
    </div>
    <div>
      <p className="footer_copy">© 2026. Choi Jun Hyuk. All rights reserved.</p>
    </div>
  </div>
  );
}
