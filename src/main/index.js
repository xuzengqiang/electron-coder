'use strict'

import {
  app,
  BrowserWindow,
  ipcMain,
  Menu
} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    useContentSize: true,
    height: 400,
    width: 280,
    /**
     * 禁止缩放
     */
    resizable: false,
    /**
     * 禁止最大化
     */
    maximizable: false,
    /**
     * 禁止最小化
     */
    minimizable: false,
    /**
     * 关闭边框
     */
    frame: false,
    transparent: false
  })

  mainWindow.loadURL(winURL)

  /**
   * 去掉默认的菜单栏
   */
  Menu.setApplicationMenu(null)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

/**
 * 当 Electron 完成初始化时被触发
 */
app.on('ready', createWindow)

/**
 * 当全部窗口关闭时退出
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * 关闭登录窗口
 * @date 2018-07-11 11:55:29
 */
ipcMain.on('close-login-window', () => {
  app.quit()
})

ipcMain.on('open-main-window', (...params) => {
  openMainWindow(...params)
})

/**
 * 打开主窗口
 * @date 2018-07-11 14:19:10
 * @description 需要关闭登陆窗口
 */
function openMainWindow () {
  let contentWindow = new BrowserWindow({
    width: 1200,
    height: 800
  })

  // 暂时隐藏登陆主窗体
  mainWindow.hide()

  // 加载首页内容
  contentWindow.loadURL('http://localhost:9080/#/front')
  // 当主窗体数据加载完成之后.显示主窗体
  contentWindow.webContents.on('did-finish-load', () => {
    contentWindow.show()
  })

  contentWindow.on('closed', function () {
    contentWindow = null
  })
}

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
