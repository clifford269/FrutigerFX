(function () {
    try {
        var tablabelbox = document.createXULElement("hbox");
        tablabelbox.setAttribute("id", "tab_label_in_urlbar_box");
        tablabelbox.setAttribute("class", "urlbar-page-action");
        tablabelbox.setAttribute("role", "button");

        var tablabel = document.createXULElement("label");
        tablabel.setAttribute("id", "tab_label_in_urlbar");
        tablabelbox.appendChild(tablabel);
        document.getElementById("identity-box").appendChild(tablabelbox)

        updateLabel();

        document.addEventListener("TabAttrModified", updateLabel, false);
        document.addEventListener('TabSelect', updateLabel, false);
        document.addEventListener('TabClose', updateLabel, false);

        function updateLabel() {
            let currentTab = window.gBrowser.selectedBrowser;
            let currentURL = currentTab.currentURI.spec;
            let host = new URL(currentURL).hostname.split('.').reverse()[1];

            if (currentURL.startsWith('http')) {

                tablabel.setAttribute("value", host.charAt(0).toUpperCase() + host.slice(1));
            } else tablabel.setAttribute("value", '');

        }

        var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

        var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(`
		#tab_label_in_urlbar_box {
		  width: unset !important;
		}
		#tab_label_in_urlbar {
		  margin-block: unset !important;
		  margin-inline: unset !important;
		  
		}
	`), null, null);

        sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);

    } catch (e) {
    }

}());
