// skip 1st line

  let {
    classes: Cc,
    interfaces: Ci,
    manager: Cm,
    utils: Cu
  } = Components;
  Cu.importGlobalProperties(['PathUtils']);


  Services.scriptloader.loadSubScript(
      PathUtils.toFileURI(PathUtils.join(PathUtils.profileDir,
          'chrome', 'userChrome', 'userChromeJS.js')), this, 'UTF-8'
  );


  let cmanifest = Cc['@mozilla.org/file/directory_service;1'].getService(Ci.nsIProperties).get('UChrm', Ci.nsIFile);
  cmanifest.append('utils');
  cmanifest.append('chrome.manifest');
  
  if(cmanifest.exists()){
    Cm.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);
    Cu.import('chrome://userchromejs/content/boot.jsm');
  }





defaultPref("ui.systemUsesDarkMode", 0);
defaultPref("browser.theme.dark-private-windows", false);
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
defaultPref("browser.compactmode.show", true);
defaultPref("extensions.pocket.enabled", false);
defaultPref("layout.css.backdrop-filter.enabled", true);
defaultPref("browser.display.windows.non_native_menus", 0);
defaultPref("widget.non-native-theme.enabled", false);
defaultPref("full-screen-api.warning.timeout", 0);
