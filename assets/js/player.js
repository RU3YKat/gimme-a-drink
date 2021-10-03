var iframeElement   = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1         = SC.Widget(iframeElement);
var widget2         = SC.Widget(iframeElementID);
// widget1 === widget2

  SC.initialize({
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: 'https://example.com/callback'
  });



    // (function(){
    //     var widgetIframe = document.getElementById('sc-widget'),
    //         widget       = SC.Widget(widgetIframe),
    //         newSoundUrl = 'https://api.soundcloud.com/tracks/13692671';

    //     widget.bind(SC.Widget.Events.READY, function() {
    //     // load new widget
    //     widget.bind(SC.Widget.Events.FINISH, function() {
    //         widget.load(newSoundUrl, {
    //         show_artwork: false
    //         });
    //     });
    //     });

    // }());