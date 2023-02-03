import {Selector} from 'testcafe'
import constants from '../util/constants';    

fixture`wagwalking login page tests` // a fixture is a group of tests with same URL
.page`${constants.consts.url}`

test(`go to wagwalking and enter Legal first name`, async (t) => {
    await t.typeText('#Legal first name', constants.consts.name)
        .expect(Selector('h2').innerText).eql('Local, trusted pet care')
    .click("button[name='Start free trial']")
})

//NB I changed this to try to find a site that didn't have a cookies popup in order to make the tests pass instead of using Facebook