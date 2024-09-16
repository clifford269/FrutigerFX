(function () {

    try {
        const globe = '../images/globe.png';
        const page = '../images/page.png';

        const favicon_click_opens_page_info_window = false;


        const favimginurlbar = document.createXULElement("image");
        favimginurlbar.setAttribute("id", "favimginurlbar");
        favimginurlbar.setAttribute("align", "center");
        favimginurlbar.style.width = "18px";
        favimginurlbar.style.height = "18px";
        favimginurlbar.style.marginLeft = "3px";
        favimginurlbar.style.marginRight = "3px";
        favimginurlbar.style.marginTop = "auto";
        favimginurlbar.style.marginBottom = "auto";


        if (favicon_click_opens_page_info_window)
            favimginurlbar.setAttribute("onclick", "gIdentityHandler.handleMoreInfoClick(event);");


        document.getElementById('identity-box').appendChild(favimginurlbar);

        document.addEventListener("TabAttrModified", updateIcon, false);
        document.addEventListener('TabSelect', updateIcon, false);
        document.addEventListener('TabClose', updateIcon, false);

        function updateIcon() {
            let currentTab = window.gBrowser.selectedBrowser;
            let currentURL = currentTab.currentURI.spec;
            const title = document.title;

            setTimeout(function () {
                if (!currentURL.startsWith('http')) {
                    document.querySelector('#favimginurlbar').style.display = 'none';
                    return;
                }
                document.querySelector('#favimginurlbar').style.display = 'block';
                var favicon_in_urlbar = gBrowser.selectedTab.image;
                if (favicon_in_urlbar.startsWith('chrome')) favicon_in_urlbar = '../images/page.png';
                if (!gBrowser.selectedTab.image || gBrowser.selectedTab.image == null)
                    favicon_in_urlbar = page;

                document.querySelector('#favimginurlbar').style.listStyleImage = "url(" + favicon_in_urlbar + ")";

            }, 100);

        }

        updateIcon();
    } catch (e) {
    }

})();
