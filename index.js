const wdio = require("webdriverio");

const myWorkspace = "appiumtestworkspace"
const myEmail = "email@email.com"
const myPassword = "pswd123"

const opts = {
  path:'/wd/hub',
  port:4723,
  capabilities: {
    platformName:"Android",
    platformVersion:"11",
    deviceName:"RX8R1080TPZ",
    appPackage:"com.Slack",
    appActivity:"slack.app.ui.HomeActivity",
    automationName:"UiAutomator2"
  }
};

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

async function main () {
  const client = await wdio.remote(opts);

  const signIn = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.Button[2]')

  await signIn.click()  
  
  const manually = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.Button[2]')

  await manually.click()
  
  const setWorkspace = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText')
  
  await setWorkspace.setValue(myWorkspace)

  const next = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button')

  await next.click()  
  
  const setEmail = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText')
  
  await setEmail.setValue(myEmail)
  
  const next1 = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button')
  
  await next1.click()  

  const setPassword = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText')
  
  await setPassword.setValue(myPassword)
  
  const next2 = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.Button[2]')

  await next2.click()

  await client.setOrientation('landscape')

  await sleep(5000)

  await client.deleteSession();
}

main();
