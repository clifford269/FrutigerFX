// config.js 

try {
  Cu.importGlobalProperties(['PathUtils']);

  if (!Services.appinfo.inSafeMode) {
    Services.scriptloader.loadSubScript(
      PathUtils.toFileURI(PathUtils.join(PathUtils.profileDir,
      'chrome', 'userChrome', 'userChromeJS.js')), this, 'UTF-8'
    );
  }
} catch(e) {
	Components.utils.reportError(e);
};
defaultPref("ui.systemUsesDarkMode", 0);
defaultPref("browser.theme.dark-private-windows", false);
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);