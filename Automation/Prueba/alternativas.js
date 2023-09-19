const { Builder, By, Key, until } = require("selenium-webdriver")
const edge = require("selenium-webdriver/edge")
const chrome = require("selenium-webdriver/chrome")
const edgeDriver = require("edgedriver")
const chromeDriver = require("chromedriver")

const ExecuteTest = async () =>{
    const edgeService = new edge.ServiceBuilder().setPort(3000).build();
    const options = new edge.Options()
    let driver = edge.Driver.createSession(options, edgeService)
    try{
        await driver.get("https://forms.gle/qkgdw8vmkoYt6ytm6")
       
    }finally{
        setTimeout(()=>{
            console.log("Tiempo agotado")
        }, 5000)
        
    } 


/*     let service = await new chrome.ServiceBuilder(chromeDriver.path)
    let driver = await new Builder().forBrowser("chrome").setChromeService(service).build()
    await driver.get("https://forms.gle/qkgdw8vmkoYt6ytm6") */
}

ExecuteTest()