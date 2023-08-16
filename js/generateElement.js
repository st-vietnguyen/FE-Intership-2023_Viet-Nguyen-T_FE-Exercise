function generateElement(types, classNames, properties) {
  let tag = document.createElement(types);
  tag.className = classNames.join(' ');
  for (let property in properties) {
    tag[`${property}`] = properties[property];
  }
  return tag;
}

export default generateElement;
