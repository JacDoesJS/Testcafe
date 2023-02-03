module.exports = {
       "browsers": ["chrome"],
    // "browsers": ["chrome", "firefox"] //can add multiple to run tests in all of them
    "screenshots": {
        "takeOnFails":true
    },
    "speed": 0.5,
    "assertionTimeout":5000, //will wait for 5 seconds 

    "reporter": [
        {
            "name": "spec"
            // "name": "list"
        },
        {
            "name": "json",
            "output": "reports/report.json"
        }, {
            "name": "xunit",
            "output": "reports/report.xml"
        }
    ]
}