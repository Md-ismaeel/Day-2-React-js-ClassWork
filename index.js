console.log(React);
// const renderUi = () => {
//   const style = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: "60px",
//     gap: "1.5rem",
//   };

//   const h1Tag = {
//     fontSize: "40px",
//   };

//   const pTAg = {
//     fontSize: "18px",
//     lineHeight: "30px",
//   };

//   return (
//     <div style={style}>
//       <h1 style={h1Tag}>Learn web development</h1>
//       <div>
//         <p style={pTAg}>
//           Welcome to the MDN learning area. This set of articles aims to guide
//           complete beginners to web development with all that they need to start
//           coding websites.
//         </p>
//       </div>
//       <div>
//         <p style={pTAg}>
//           The aim of this area of MDN is not to take you from "beginner" to
//           "expert" but to take you from "beginner" to "comfortable." From there,
//           you should be able to start making your way, learning from{" "}
//           <a href="https://developer.mozilla.org/en-US/">the rest of MDN,</a>{" "}
//           and other intermediate to advanced resources that assume a lot of
//           previous knowledge.
//         </p>
//       </div>
//       <div>
//         <p style={pTAg}>
//           If you are a complete beginner, web development can be challenging —
//           we will hold your hand and provide enough detail for you to feel
//           comfortable and learn the topics properly. You should feel at home
//           whether you are a student learning web development (on your own or as
//           part of a class), a teacher looking for class materials, a hobbyist,
//           or someone who just wants to understand more about how web
//           technologies work.
//         </p>
//       </div>
//     </div>
//   );
// };

const H1 = React.createElement(
  "h1",
  { className: "heading" },
  "Learn web development"
);

const P1 = React.createElement(
  "p",
  { id: "pTag" },
  `Welcome to the MDN learning area. This set of articles aims to guide
complete beginners to web development with all that they need to start
coding websites.`
);
const Div1 = React.createElement("div", {}, [P1]);

const A = React.createElement(
  "a",
  { href: `https://developer.mozilla.org/en-US/` },
  "the rest of MDN,"
);
const P2 = React.createElement(
  "p",
  { id: "pTag" },
  `The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from `,
  A,
  ` and other intermediate to advanced resources that assume a lot of previous knowledge.`
);

const Div2 = React.createElement("div", {}, P2);

const P3 = React.createElement(
  "p",
  { id: "pTag" },
  `If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.`
);
const Div3 = React.createElement("div", {}, P3);

const parentDiv = React.createElement("div", { className: "parentDiv" }, [
  H1,
  Div1,
  Div2,
  Div3,
]);

ReactDOM.render(parentDiv, document.querySelector("#root"));
