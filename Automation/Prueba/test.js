const { Builder, By, Key, until } = require("selenium-webdriver");
const ElementId = require("./calcular");
const edge = require("selenium-webdriver/edge");
const edgeDriver = require("edgedriver");
let service = new edge.ServiceBuilder(edgeDriver.findEdgePath);

// Inicializa driver como null antes del bucle CountTime
let driver = null;

const ExecuteTest = async (driver) => {
    try {
        await driver.get("https://forms.gle/mzXctH9o5rGGk7cy7");

        const elementId = new ElementId();
        elementId.buildElementArray();

        elementId.ElementArray.forEach(async (item) => {
            const radioButton = await driver.findElement(By.css(`div.nWQGrd.zwllIb #${item}`));
            const actions = driver.actions({ bridge: true });
            await driver.wait(until.elementIsVisible(radioButton));
            await actions.move({ origin: radioButton }).click().perform();
        });

        const button = await driver.findElement(
            By.css(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd")
        );
        const actions = driver.actions({ bridge: true });

        await driver.wait(until.elementIsVisible(button));
        await actions.move({ origin: button }).click().perform();
        await button.click();
    } catch (error) {
        console.error(error);
    }
};

const Timer = async (date, time, iteration) => {
    if (iteration === 0 || driver === null) {
        // Si driver es null o es la primera iteración, crea una nueva sesión
        
        return new Promise(async (resolve) => {
        setTimeout(async () => {
            driver = await createSessionEdge(service);
            await Task(date, driver);
            resolve();
        }, 2000);
    });
    } else {
        Logger(date, time);

        return new Promise(async (resolve) => {
        setTimeout(async () => { 
            driver = await createSessionEdge(service);
            await Task(date, driver);
            resolve();
        }, time);
    });
    }
    
};

function Logger(date, time) {
    console.log(`Hora actual: ${date.getHours()}:${date.getMinutes()}`);
    console.log(`El script correra en aproximadamente ${Math.floor(time / 1000)} segundos o ${Math.round(time / 1000 / 60)} minutos`);
}

async function createSessionEdge(builder) {
    let driver = await new Builder()
        .forBrowser("MicrosoftEdge")
        .setEdgeService(builder)
        .build();

    return driver;
}

async function closeSessionStorage(driver) {
    if (driver && driver !== null) {
        // Verifica si driver es una instancia válida antes de intentar cerrarla
        await driver.quit();
    }
}

const Task = async (date, driver) => {
    await ExecuteTest(driver);
    return console.log(`Script ejecutado a las ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
};

const CountTime = async () => {
    for (let index = 0; index <= 10; index++) {
        const time = Math.floor(Math.random() * 100000);
        const date = new Date();
        if (time < 1200) return CountTime();
        await Timer(date, time, index);
        
        // Al final de cada iteración, verifica si driver es una instancia válida antes de intentar cerrarla
        await closeSessionStorage(driver);
    }
};

CountTime();
