const createDiv = () => document.createElement("div");

const createTxtNode = (content) => document.createTextNode(content);

const setStyles = (node, properties) => {
  for (const key in properties) {
    if (Object.hasOwnProperty.call(properties, key)) {
      const element = properties[key];
      node.style[key] = element;
    }
  }
};

const createAcordion = (header, content) => {
  // creating wrapper and adding styles to it
  const wrap = createDiv();
  let isContentHidden = true;
  setStyles(wrap, {
    border: "1px solid gray",
    backgroundColor: "white",
  });
  const head = createDiv();
  //   creating header and adding style to it
  setStyles(head, {
    padding: "5px",
    borderBottom: "1px solid gray",
    display: "flex",
    justifyContent: "space-between",
  });
  //   creating header text as a child to wrapper
  const headerTxt = createTxtNode(header);
  head.appendChild(headerTxt);
  //   creating close icon in header
  const closeIcon = createDiv();
  setStyles(closeIcon, { cursor: "pointer" });
  closeIcon.onclick = () => {
    isContentHidden = !isContentHidden;
    setStyles(contentDiv, {
      display: isContentHidden ? "none" : "block",
    });
  };
  const closeIconTxt = createTxtNode("X");
  closeIcon.appendChild(closeIconTxt);
  head.appendChild(closeIcon);
  //   creating content and adding styles to it
  const contentDiv = createDiv();
  setStyles(contentDiv, {
    display: "none",
    padding: "5px",
  });
  //   creating content text as wrapper child
  const contentTxt = createTxtNode(content);
  contentDiv.appendChild(contentTxt);
  wrap.appendChild(head);
  wrap.appendChild(contentDiv);
  //   wraper getting assingned to main as child
  document.querySelector("#acord").appendChild(wrap);
};
// calling create accodion method
// createAcordion("header1", "body1");

/**
 * using map on accordion
 *
 * v =[
 * [header1, body1],
 * [header1, body1],
 * [header1, body1],
 * [header1, body1],5
 * ]
 */

const accordion = [
  ["header1", "body1"],
  ["header2", "body2"],
  ["header3", "body3"],
  ["header4", "body4"],
  ["header5", "body5"],
];

const arr = accordion.map((arrItem) => {
  createAcordion(...arrItem);
  /**
   * why this is working .
   * Learn about spread operators in js.
   * Learn about destructuring (array and obj) in js.
   * Each with atleast 5 examples
   */
});
