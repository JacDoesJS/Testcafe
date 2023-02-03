### Notes from the Udemy course - Web Automation Using TestCafe  
</br>

1. make an empty folder locally
2. open folder in VSCode
3. open terminal
4. run npm init
5. npm i testcafe --save-dev
6. make gitignore file
7. make test folder
8. create test file.js
9. in package.json, change test(under scripts) to testcafe chrome path to testfile
   eg  "scripts": {
    "test": "testcafe chrome ./tests/firstTest.js"
    NB can easily substitute firefox / edge etc
10. write test file - see firstTest.js
11. goto package.jason and rclick on the word tests (probably line 7) and Run Script
    
12. make a util folder in project root
13. add constants.js file
14. add xpath file
15. add .testcaferc.js in project root (to launch multiple browsers)
    you could add eg "chrome:headless" to run test without launching user interface
16. update package.json  "scripts": {
        "test": "testcafe ./tests/firstTest.js --c ./testcaferc.js"
17. now he's changed the above to...
        "test": "testcafe ./tests --c ./testcaferc.js" to run ALL the tests

18. can use before, after, beforeEach, afterEach
19. can take screenshots - await t.takeScreenshot() and it puts them in a folder for you (he also shows a way to add custom names to them)
20. can setTestSpeed(1)
    
21. INSTALL reporter 
        npm i testcafe-reporter-html
22. update package.json
     "test": "testcafe ./tests --c ./testcaferc.js --reporter html:reports/"
23. rclick on report file and open in file explorer and then double click to look in browser :)
24. INSTALL cucumber steps 
        npm i testcafe-cucumber-steps
    and install cucumber reporter 
    BUT
    NB this did NOT work - there are Github pages about the fact that testcafe is not officially integrated with cucumber. The docs say cucumber only supports TestCafe 1.X and I'm on 2.+

25. shows you how to do visual testing (skipped this as already covered with Backstop)
    
26. shows you how to check a new window has been opened - see windowsTest.js
    
27. .testcaferc.js adds timeout - to make it wait before moving on to the next thing
28. .testcaferc.js to add spec readout in terminal and json file report in reports folder, whatever is at the top is what will run, either list or spec, not both (I think?)
    
29. INSTALL npm i allure-commandline - to generate Allure repotrs from test results
30. create allure.config.js file - go to testcafe-reporter-allure-plus docs and copy and paste contents 
    ignore all the other instructions except --reporter allure-plus
    create allure-categories.config.js file - go to testcafe-reporter-allure-plus docs and copy and paste contents 
31. you can also copy a simple test from the docs
32. update package.json "test": "testcafe ./tests --c ./testcaferc.js --reporter allure-plus",
33. update package.json "allureOpen": "allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report"
34. Rclick and run script on allureOpen - ofc this didn't work
    
35. DEBUGGING use .debug() inside an individual test
    then when test runs - see bottom RH corner of browser to click to go onto next action

36. input text - eg get it to type into google
    await t.typeText("input[name='q']","Some text you have written")
    .selectText("input[name='q']")
    .pressKey('delete')

    
