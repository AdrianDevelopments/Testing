const { Builder, By, Key, until } = require("selenium-webdriver");
<<<<<<< HEAD
const ElementId = require("./calcular")
=======
const ElementId = require("./calcular");
>>>>>>> 42d9fecc38ba4bcf8b6d1b886a52c02ed3bcfcc7
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
    try {
<<<<<<< HEAD
    
     await driver.get("https://forms.gle/mzXctH9o5rGGk7cy7");

    const elementId = new ElementId();
    elementId.buildElementArray();

    elementId.ElementArray.forEach(async(item) =>{
        const radioButton = await driver.findElement(By.id(item))
        await driver.wait(until.elementIsEnabled(radioButton))
        await radioButton.click()
    })

    const button = await driver
        .findElement(By.css(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd")).click()
        

    } catch (error) {
        console.error(error)
    }finally{
        
    }  
=======
        await driver.get("https://forms.gle/mzXctH9o5rGGk7cy7");

        const elementId = new ElementId();
        elementId.buildElementArray();

        elementId.ElementArray.forEach(async (item) => {
            const radioButton = await driver.findElement(By.id(item));
            await driver.wait(until.elementIsVisible(radioButton));
            await radioButton.click();
        });

        const button = await driver.findElement(
            By.css(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd")
        );

        await driver.wait(until.elementIsVisible(button));
        await button.click();
    } catch (error) {
        console.error(error);
    } finally {
    }
>>>>>>> 42d9fecc38ba4bcf8b6d1b886a52c02ed3bcfcc7
};

ExecuteTest();
