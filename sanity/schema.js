import risk from "./schemas/risk"
import caseStudy from "./schemas/case-study"
import titleText from "./schemas/title-text"
import titleBlock from "./schemas/title-block"
import solution from "./schemas/solution"
import propertyIssue from "./schemas/property-issue"
import homePage from "./schemas/homepage"
import textBlock from "./schemas/text-block"
import possibility from "./schemas/possibility"
import genericPropertyIssue from "./schemas/generic-property-issue"

export const schema = {
  types: [risk, caseStudy, titleText, titleBlock, solution, propertyIssue, homePage, textBlock, possibility, genericPropertyIssue],
}
