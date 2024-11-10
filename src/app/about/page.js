// export default function About() {
//   return (
//     <main>
//       <h1>About Me</h1>
//       <p>Hello! I’m Lamia, a creative web developer and designer.</p>
//       <h2>Skills</h2>
//       <ul>
//         <li>HTML, CSS, Javascript, Typescript</li>
//         <li>React, Next JS</li>
//         <li>Graphic Design, Adobe Photoshop</li>
//       </ul>
//     </main>
//   );
// }


// import '../globals.css';

// export default function About() {
//   return (
//     <div>
//       <nav className="navbar">
//         {/* Navigation links as in your previous example */}
//       </nav>

//       <main>
//         <h1>About Me</h1>
//         <p>I'm Lamia Gul, a web developer with a passion for creating beautiful and functional websites.</p>
//         <img src="/image.jpg" alt="Profile Picture" />
//         <p>I have experience in:</p>
//         <ul>
//           <li>HTML</li>
//           <li>Photography</li>
//           <li>Photoshop</li>
//         </ul>
//         <p>I'm always looking for new challenges and opportunities to learn and grow.</p>
//       </main>

//       <footer>
//         {/* Footer content as in your previous example */}
//       </footer>
//     </div>
//   );
// }

import '../globals.css';

export default function About() {
  return (
    <div className="about-page">
      {/* <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> */}

      <main>
        <h1>About Me</h1>
        <p>I'm Lamia Gul, a creative web developer with a passion for building beautiful and functional websites.</p>
        <img src="/image.jpg" alt="Profile Picture" />
        <p>I have experience in:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
        <p>I'm always looking for new challenges and opportunities to learn and grow.</p>
      </main>
    </div>
  );
}