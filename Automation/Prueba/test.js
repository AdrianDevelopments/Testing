const { Builder, By, Key, until } = require("selenium-webdriver");
const edge = require("selenium-webdriver/edge");
const chrome = require("selenium-webdriver/chrome");
const edgeDriver = require("edgedriver");
const chromeDriver = require("chromedriver");

const ExecuteTest = async () => {
    let service = await new edge.ServiceBuilder(edgeDriver.findEdgePath);
    let driver = await new Builder()
        .forBrowser("MicrosoftEdge")
        .setEdgeService(service)
        .build();
    await driver.get("https://forms.gle/mzXctH9o5rGGk7cy7");

    await driver.findElement(By.id("i14")).click();
    await driver.findElement(By.id("i27")).click();
    await driver.findElement(By.id("i46")).click();
    await driver.findElement(By.id("i65")).click();
    await driver.findElement(By.id("i84")).click();

    await driver.findElement(By.id("i103")).click();
    await driver.findElement(By.id("i122")).click();
    await driver.findElement(By.id("i138")).click();
    await driver.findElement(By.id("i157")).click();
    await driver.findElement(By.id("i176")).click();

    await driver.findElement(By.id("i195")).click();
    await driver.findElement(By.id("i214")).click();
    await driver.findElement(By.id("i233")).click();
    await driver.findElement(By.id("i252")).click();
    await driver.findElement(By.id("i271")).click();

    await driver.findElement(By.id("i290")).click();
    await driver.findElement(By.id("i309")).click();
    await driver.findElement(By.id("i328")).click();
    await driver.findElement(By.id("i347")).click();
    await driver.findElement(By.id("i366")).click();

    await driver
        .findElement(By.css(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd"))
        .click();
};

ExecuteTest();
