import { Selector } from 'testcafe'
import XPathSelector from '../util/xpath'

fixture`facebook login page tests`
    .page`https://the-internet.herokuapp.com/windows`

test('go to https://the-internet.herokuapp.com/windows', async (t) => {
        
    const clickHere = XPathSelector("//a[text()='Click Here']")
    await t.click(clickhere)
    .expect(Selector("h3").innerText).eql("New Window")
    const currentWindow = await t.getCurrentWindow()
    await t.openWindow("https://www.facebook.com")
    await t.switchToWindow(currentWindow)
    .expect(Selector("h3").innerText).eql("New Window")
    })