gemini.suite('Wrapper', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.Wrapper')
        .capture('Wrapper', function(actions, find) {
            actions.waitForElementToShow('.Wrapper-Cell', 20000);
        })
});
gemini.suite('Modal_Close', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.Modal_Button__Close')
        .capture('Close', function(actions, find) {
            actions.waitForElementToShow('.Wrapper-Cell', 20000);
            const img = find('.Wrapper-Cell > img');
            actions.click(img);
        })
});
gemini.suite('Modal_Prev', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.Modal_Button__Prev')
        .capture('Close', function(actions, find) {
            actions.waitForElementToShow('.Wrapper-Cell', 20000);
            const img = find('.Wrapper-Cell > img');
            actions.click(img);
        })
});
gemini.suite('Modal_Next', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.Modal_Button__Next')
        .capture('Close', function(actions, find) {
            actions.waitForElementToShow('.Wrapper-Cell', 20000);
            const img = find('.Wrapper-Cell > img');
            actions.click(img);
        })
});
