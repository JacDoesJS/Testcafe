import XPathSelector from '../util/xpath';
import constants from '../util/constants';    

fixture`health insurance page tests`
.page`${constants.consts.url}`

test('go to select ', async (t) => {
  
    const insurance = "//div[@id='globalnav']///span[text()='Insurance']"
    const health = "//div[@id='globalnav']///span[text()='Health']"

    await t.hover(XPathSelector(insurance))
    .click(XPathSelector(health))
})

//unspurisingly this didn't work as the code was very difficult to read due to the font size being too small
