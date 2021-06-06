import React from "react";

function Footer() {
  var a = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {a}</p>
    </footer>
  );
}

export default Footer;
