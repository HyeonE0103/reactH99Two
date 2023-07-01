function validation(title, content) {
  let blank_pattern = /^\s+|\s+$/g;
  return title.replace(blank_pattern, '') && content.replace(blank_pattern, '')
    ? true
    : false;
}

export default validation;
