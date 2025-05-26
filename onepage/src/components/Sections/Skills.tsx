export const Skills = () => {
  const handleScroll = () => {
    const liaSection = document.getElementById("lia");
    if (liaSection) {
        liaSection.scrollIntoView({ behavior: "smooth" });
    }
}
    return (
      <div className="container">
          <h2>My SKills</h2>
        <div className="all-skills">
         <div className="frontend-skills">
          <h3>Frontend</h3>
  <ul>
    <li>TypeScript</li>
    <li>React</li>
    <li>JavaScript</li>
    <li>CSS</li>
    <li>HTML</li>
    <li>Git</li>
    <li>Vite</li>
  </ul>
  </div>
  <div className="backend-skills">
    <h3>Backend</h3>
  <ul>
    <li>MySQL</li>
    <li>Docker</li> 
    <li>PHP</li>
    <li>Node.js</li>
    </ul>
    </div>
    </div>
  <p className="SKillSetEnd"><i>Always learning — currently exploring Node.js, Next.js and improving performance optimization skills.</i></p>
  <button className="liaBTN" onClick={handleScroll}>more...</button>

      </div>
    );
  };