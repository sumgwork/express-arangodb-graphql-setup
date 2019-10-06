const { aql } = require("arangojs");

const getFAQsQuery = aql`
for faq in FAQs
return {title: faq.title, body:faq.body}
`;

module.exports = getFAQsQuery;
