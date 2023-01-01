const showAlert = (url) => {
    if ( url.match(/https:\/\/www\.youtube\.com\/watch/)){
      var koyoUrl = url.replace(/https:\/\/www\.youtube\.com\/watch\?v=/g, 'https://koyokoyotube.web.app/watch/')
      koyoUrl = koyoUrl.replace(/&.*/g, '')
      window.open(koyoUrl)
    }else{
      alert("開いているタブがYoutubeの動画ではありません。")
    }
};

chrome.action.onClicked.addListener((tab) => { 
    chrome.scripting.executeScript({
        target: { tabId: tab.id }, 
        function: showAlert, 
        args: [tab.url]
    });
});