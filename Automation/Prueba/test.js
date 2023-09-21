const { Builder, By, Key, until } = require("selenium-webdriver");
const ElementId = require("./calcular");
const edge = require("selenium-webdriver/edge");
const edgeDriver = require("edgedriver");

const ExecuteTest = async (driver) => {
    try {
        await driver.get("https://forms.gle/mzXctH9o5rGGk7cy7");

        const elementId = new ElementId();
        elementId.buildElementArray();

        elementId.ElementArray.forEach(async (item) => {
            const radioButton = await driver.findElement(By.css(`div.nWQGrd.zwllIb #${item}`));   
            const actions = driver.actions({bridge: true})  
            await driver.wait(until.elementIsVisible(radioButton));
            await driver.sleep(1000)
            await actions.move({origin: radioButton}).click().perform()
            //await radioButton.click();
        });

        const button = await driver.findElement(
            By.css(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd")
        );
        const actions = driver.actions({bridge: true})  
           
            
        await driver.wait(until.elementIsVisible(button));
        //await driver.sleep(1000)
        await actions.move({origin: button}).click().perform()
        setTimeout(async() =>{
            await button.click();
        }, 2000)
        
    } catch (error) {
        console.error(error);
    }
};

const CountTime = async(count = 0) => {
        if (count > 10) return await driver.quit();
        const time = Math.floor(Math.random() * 100000);
        const date = new Date();
        console.log(`Hora actual: ${date.getHours()}: ${date.getMinutes()}`);
        console.log(
            `El script correra en aproximadamente ${Math.floor(
                time / 1000
            )} segundos o ${Math.round(time / 1000 / 60)} minutos`
        );

        if (time < 1200) return CountTime();
        setTimeout(async () => {
            let service =  new edge.ServiceBuilder(edgeDriver.findEdgePath);
            let driver = await new Builder()
                .forBrowser("MicrosoftEdge")
                .setEdgeService(service)
                .build();
            await ExecuteTest(driver)
            
            console.log(
                `Script ejecutado a las ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            );
            return CountTime(count + 1)
        }, time);
};

CountTime()