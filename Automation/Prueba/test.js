const { Builder, By, Key, until } = require("selenium-webdriver")
const edge = require("selenium-webdriver/edge")
const chrome = require("selenium-webdriver/chrome")
const edgeDriver = require("edgedriver")
const chromeDriver = require("chromedriver")

const ExecuteTest = async () =>{


    let service = await new edge.ServiceBuilder(edgeDriver.findEdgePath)
    let driver = await new Builder().forBrowser("MicrosoftEdge").setEdgeService(service).build()
    await driver.get("https://forms.gle/mzXctH9o5rGGk7cy7") 
    
}

ExecuteTest()