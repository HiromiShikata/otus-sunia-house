function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu').addItem('Execute', 'myFunction').addToUi();
}

function onExecute(): void {
  // const sheet = SpreadsheetApp.getActiveSheet();
}
