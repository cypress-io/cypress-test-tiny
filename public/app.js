// window.onbeforeunload = () => {
//   console.log('window on beforeunload')
//   return confirm("test")
// };

window.onbeforeunload = function (e) {
  console.log('app window.onbeforeunload')
  e.returnValue = 'Dialog';
  return;
}
