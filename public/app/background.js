/**
 * File: /Users/addielJuarez/Documents/developer/react/extension-chrome-react/public/app/background.js
 * Project: /Users/addielJuarez/Documents/developer/react/extension-chrome-react
 * Created Date: Sunday, July 14th 2019, 6:39:20 pm
 * Author: Addiel Juarez
 * -----
 * Last Modified: Sun Jul 14 2019
 * Modified By: Addiel Juarez
 * -----
 * Copyright (c) 2019 Addiel
 * ------------------------------------
 */


// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow:true},function(tabs) {
         var activeTab = tabs[0];
         chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
 });