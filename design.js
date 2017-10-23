module.exports = function PrintMessage(n, message) {

  if (n > 0) {
    console.log(message);
    return PrintMessage(n-1,message);
  }

  return;

}
