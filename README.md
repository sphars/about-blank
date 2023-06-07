# about:blank
A simple, blank webpage. No more distractions when you open your browser. 

View the **[live page](https://aboutblank.page)**  

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad4e2eb0-bc25-4226-bfcc-063da725f6e5/deploy-status)](https://app.netlify.com/sites/aboutblank-page/deploys)

## Usage
By default, the page color is based on browser/OS theme, and uses #F2F2F2 for light and #262626 for dark.  

For a custom color, set the URL query parameter `c` to any HEX code, such as [https://aboutblank.page/?c=273747](https://aboutblank.page/?c=273747). For even more fun, set `c` to [`random`](https://aboutblank.page/?c=random). 

**Note: JavaScript needs to be enabled to use custom colors.**

### For new tabs
On Chrome/Edge, if you'd like to set this page as your new tab page, you'll have to use an extension. [NewTab-Redirect](https://github.com/jimschubert/newtab-redirect) works well for this. Other browsers like Firefox and Vivaldi allow you to set a URL as the new tab page. Not sure about Safari.

## Deploy
If you wish to use this for yourself, clone and use the repo root directory on your server. You can also fork this repo and enable GitHub Pages.

## Reasoning
Everytime I open a new tab or browser window, I'm faced with a collection of bookmarks. It's a simple click to distract myself by going to a time-wasting site. With this, I have to manually type something into the address bar to navigate. Hopefully it'll curb my tendencies to be distracted.  

I could set the homepage to `about:blank` but that's a blank, white page, regardless of theme settings. I needed a dark page, especially at night. (This behavior has been changed to respect the OS settings with recent versions of Firefox. Chrome is still a white page regardless of settings.)

## Credits
Icon from [Iconoir](https://iconoir.com)  
Invert color function from [https://stackoverflow.com/a/35970186/](https://stackoverflow.com/a/35970186/)
