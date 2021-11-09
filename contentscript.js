// see https://stackoverflow.com/questions/23202136/changing-navigator-useragent-using-chrome-extension
var actualCode =  '(' + function() {
    // Reset navigator
    Object.defineProperties(navigator, {
      userAgent: {
        get: function () {
          return 'iPhone';
        },
      },
      platform: {
        get: function () {
          return 'iPhone';
        },
      },
    });
} + ')();';

// Inject custom js
var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
