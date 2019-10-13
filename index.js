function forbidden() {
  // 让别人打开开发者工具后，只要移动鼠标就会触发debugger
  window.addEventListener('mousemove', function () {
    debugger
    this.console.log("debugger暂停")
  })

  window.addEventListener('mousedown', function (event) {
    let e = event || window.event || arguments.callee.caller.arguments[0]
    if (e.button == 2 || e.button == 3) {
      this.console.log('不能用鼠标右键哦')
    }
  }, false)
  window.oncontextmenu = new Function("return false") // 禁止右键鼠标开启菜单
  // window.oncontextmenu = function () {
  //   return false
  // }

  window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0]
    if (e.keyCode === 123) {   //F12
      return false
    } else if (e.ctrlKey && (e.shiftKey) && (e.keyCode == 73)) { //Ctrl+Shift+I
      this.console.log("禁止一切想操作控制台的行为")
      return false
    } else if ((e.shiftKey) && (e.keyCode == 121)) { //Shift+F10
      return false
    } else if ((e.ctrlKey) && (e.keyCode == 85)) { //Ctrl+U
      return false
    }
  }
}
module.exports = forbidden()