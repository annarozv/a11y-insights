import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Par mums';
  }, []);

  return (
    <div className="About">
      <h1>Par mums</h1>
    </div>
  );
}

export default About;
