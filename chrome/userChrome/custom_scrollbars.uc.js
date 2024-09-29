"use strict";


(function () {
    /* General scrollbar settings *******************************************************/

    // default: hide_scrollbars = false
    const hide_scrollbars = false;

    // default: hide_scrollbar_buttons = false
    const hide_scrollbar_buttons = false;

    // default: thin_scrollbars = false / browsers own way to show thin scrollbars
    const thin_scrollbars = false;

    // default: custom_scrollbar_opacity = false
    const custom_scrollbar_opacity = false;

    // default: custom_opacity_value = "1.0"
    const custom_opacity_value = "1.0";


    /* Custom scrollbar settings ("custom_scrollbar_" --> "cs_") ************************/

    // default: custom_scrollbars = true
    const custom_scrollbars = true;

    // default: custom_scrollbar_arrows = true
    const custom_scrollbar_arrows = true;

    // default: custom_scrollbar_arrows_version = 1
    //  1 ==> SVG arrows as code: might not work on some pages
    //  2 ==> SVG arrows as files: files have to be downloaded from
    //        https://github.com/Aris-t2/CustomJSforFx/tree/master/icons
    //        and placed inside 'chrome\icons' folder
    const custom_scrollbar_arrows_version = 1;

    // default: custom_scrollbar_arrows_color = "grey"; / # ==> %23 e.g. #33CCFF ==> %2333CCFF
    // only for 'custom_scrollbar_arrows_version = 1'
    const custom_scrollbar_arrows_color = "grey";

    // default: cs_thumb_border = 0 / in px
    const cs_thumb_border = 0;

    // default: cs_thumb_roundness = 0 / in px
    const cs_thumb_roundness = 0;

    // default: cs_buttons_border = 0 / in px
    const cs_buttons_border = 0;

    // default: cs_buttons_roundness = 0 / in px
    const cs_buttons_roundness = 0;

    // default: cs_ignore_color_gradients = false / 'flat' scrollbars
    const cs_ignore_color_gradients = false;


    /* Custom scrollbar colors and gradients ********************************************/

    // default: cs_background_color = "#DDDDDD"
    const cs_background_color = "#DDDDDD";

    // default: cs_background_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_background_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_background_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_background_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_corner_background_color = "#DDDDDD" / - corner
    const cs_corner_background_color = "#DDDDDD";

    // default: cs_corner_background_image = "linear-gradient(45deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%),linear-gradient(-45deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%)"
    let cs_corner_background_image = "linear-gradient(45deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%),linear-gradient(-45deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%)";

    // default: cs_thumb_color = "#33CCFF" / thumb/slider
    const cs_thumb_color = "#33CCFF";

    // default: cs_thumb_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_thumb_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_thumb_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_thumb_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_thumb_hover_color = "#66FFFF"
    const cs_thumb_hover_color = "#66FFFF";

    // default: cs_thumb_hover_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_thumb_hover_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_thumb_hover_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_thumb_hover_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_thumb_border_color = "#33CCFF"
    const cs_thumb_border_color = "#33CCFF";

    // default: cs_buttons_color = "#66FFFF" / buttons
    const cs_buttons_color = "#66FFFF";

    // default: cs_buttons_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_buttons_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_buttons_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_buttons_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_buttons_hover_color = "#33CCFF"
    const cs_buttons_hover_color = "#33CCFF";

    // default: cs_buttons_hover_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_buttons_hover_image_vertical = "linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_buttons_hover_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)"
    let cs_buttons_hover_image_horizontal = "linear-gradient(to bottom,transparent,rgba(255,255,255,0.5),transparent)";

    // default: cs_buttons_border_color = "#33CCFF"
    const cs_buttons_border_color = "#33CCFF";


    /* ******************************************************************************************** */
    /* ******************************************************************************************** */

    let ProfilePathChrome = PathUtils.toFileURI(PathUtils.join(PathUtils.profileDir, 'chrome'));

    // unset background image color gradients -> flat scrollbars
    if (cs_ignore_color_gradients === true)
        cs_background_image_vertical
            = cs_background_image_horizontal
            = cs_corner_background_image
            = cs_thumb_image_vertical
            = cs_thumb_image_horizontal
            = cs_thumb_hover_image_vertical
            = cs_thumb_hover_image_horizontal
            = cs_buttons_image_vertical
            = cs_buttons_image_horizontal
            = cs_buttons_hover_image_vertical
            = cs_buttons_hover_image_horizontal
            = "unset";


    let custom_scrollbars_code = '';
    let custom_scrollbar_arrows_code = '';
    let hide_scrollbar_buttons_code = '';
    let custom_scrollbar_opacity_code = '';
    let hide_scrollbars_code = '';
    let thin_scrollbars_code = '';

    if (custom_scrollbars === true)
        custom_scrollbars_code = `
		slider, scrollcorner, scrollbar thumb, scrollbar scrollbarbutton {
		  appearance: auto;
		  -moz-default-appearance: none !important;
		}
slider {
    background-color: #f2f2f2 !important;
}

scrollbar[orient="vertical"] slider {
    background-image: linear-gradient(90deg, #e5e5e5, #f0f0f0 20%) !important;
}

scrollbar[orient="horizontal"] slider {
    background-image: linear-gradient(180deg, #e5e5e5, #f0f0f0 20%) !important;
}

scrollcorner {
    background-color: #f2f2f2 !important;
    background-image: ${cs_corner_background_image} !important;
}

scrollbar thumb {
    background-color: #f2f2f2 !important;
    border-radius: 2px !important;
    outline: 1px solid #8e8f8f !important;
    outline-offset: -1px !important;
    box-shadow: inset 0 0 0 1px #fffc !important;
}

scrollbar thumb[orient="vertical"] {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC") no-repeat 50%, linear-gradient(90deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf) !important;
    width: 17px !important;
}

scrollbar thumb[orient="horizontal"] {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC") no-repeat 50%, linear-gradient(180deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf) !important;
    height: 17px !important;

}

scrollbar thumb[orient="vertical"]:hover {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC") no-repeat 50%, linear-gradient(90deg, #eaf6fd 45%, #bee6fd 0) !important;
    outline-color: #3c7fb1 !important;
    
}

scrollbar thumb[orient="vertical"]:active {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC") no-repeat 50%, linear-gradient(90deg, #c4e5f6 45%, #98d1ef 0) !important;
    outline-color: #18598A !important;
}

scrollbar thumb[orient="horizontal"]:hover {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC") no-repeat 50%, linear-gradient(180deg, #eaf6fd 45%, #bee6fd 0) !important;
    outline-color: #3c7fb1 !important;
}

scrollbar thumb[orient="horizontal"]:active {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC") no-repeat 50%, linear-gradient(180deg, #c4e5f6 45%, #98d1ef 0) !important;
    outline-color: #18598A !important;
}
scrollbar scrollbarbutton{
outline: 1px solid transparent !important;
outline-offset: -1px !important;
}
scrollbar[orient="vertical"]:hover scrollbarbutton[type='decrement'] {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf) !important;
        outline-color: #8e8f8f !important;


}

scrollbar[orient="vertical"]:hover scrollbarbutton[type='increment'] {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf) !important;
        outline-color: #8e8f8f !important;

}

scrollbar[orient="horizontal"]:hover scrollbarbutton[type='decrement'] {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=") no-repeat 50%, linear-gradient(90deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf) !important;
    outline-color: #8e8f8f !important;
}

scrollbar[orient="horizontal"]:hover scrollbarbutton[type='increment'] {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf) !important;
    outline-color: #8e8f8f !important;
}


scrollbar scrollbarbutton {
    border-radius: 2px !important;
    width: 17px !important;
    height: 17px !important;
}


scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:hover {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #eaf6fd 45%, #bee6fd 0) !important;
    outline-color: #3c7fb1 !important;
     box-shadow: inset 0 0 0 1px #fffc !important;
}

scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:hover {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #eaf6fd 45%, #bee6fd 0) !important;
    outline-color: #3c7fb1 !important;
     box-shadow: inset 0 0 0 1px #fffc !important;
}

scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:hover {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=") no-repeat 50%, linear-gradient(90deg, #eaf6fd 45%, #bee6fd 0) !important;
    outline-color: #3c7fb1 !important;
     box-shadow: inset 0 0 0 1px #fffc !important;
}

scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:hover {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #eaf6fd 45%, #bee6fd 0) !important;
    outline-color: #3c7fb1 !important;
     box-shadow: inset 0 0 0 1px #fffc !important;
}

scrollbar[orient="vertical"] scrollbarbutton[type="decrement"]:active {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #c4e5f6 45%, #98d1ef 0) !important;
    outline-color: #18598A !important;
    box-shadow: inset 0 0 0 1px #fffc !important;
}

scrollbar[orient="vertical"] scrollbarbutton[type="increment"]:active {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #c4e5f6 45%, #98d1ef 0) !important;
    outline-color: #18598A !important;
    box-shadow: inset 0 0 0 1px #fffc !important;

}

scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"]:active {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=") no-repeat 50%, linear-gradient(90deg, #c4e5f6 45%, #98d1ef 0) !important;
    outline-color: #18598A !important;
    box-shadow: inset 0 0 0 1px #fffc !important;

}

scrollbar[orient="horizontal"] scrollbarbutton[type="increment"]:active {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #c4e5f6 45%, #98d1ef 0) !important;
    outline-color: #18598A !important;
    box-shadow: inset 0 0 0 1px #fffc !important;
}

	`;

    if (custom_scrollbar_arrows === true && custom_scrollbar_arrows_version === 1)
        custom_scrollbar_arrows_code = `
		scrollbar scrollbarbutton {
		  background-repeat: no-repeat !important;
		  background-position: center center !important;
		}
scrollbar[orient="vertical"] scrollbarbutton[type="decrement"] {

    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #e5e5e5, #f0f0f0 20%) !important;
}

scrollbar[orient="vertical"] scrollbarbutton[type="increment"] {

    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(90deg, #e5e5e5, #f0f0f0 20%) !important;
}

scrollbar[orient="horizontal"] scrollbarbutton[type="decrement"] {

    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=") no-repeat 50%, linear-gradient(180deg, #e5e5e5, #f0f0f0 20%) !important;
}

scrollbar[orient="horizontal"] scrollbarbutton[type="increment"] {

    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+") no-repeat 50%, linear-gradient(180deg, #e5e5e5, #f0f0f0 20%) !important;
}

	`;
    else if (custom_scrollbar_arrows === true && custom_scrollbar_arrows_version === 2)
        custom_scrollbar_arrows_code = `
		scrollbar scrollbarbutton {
		  background-repeat: no-repeat !important;
		  background-position: center center !important;
		}
		scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"] {
		  background-image: url("${ProfilePathChrome}/icons/up.svg") !important;
		}
		scrollbar[orient="vertical"] > scrollbarbutton[type="increment"] {
		  background-image: url("${ProfilePathChrome}/icons/down.svg") !important;
		}
		scrollbar[orient="horizontal"] > scrollbarbutton[type="decrement"] {
		  background-image: url("${ProfilePathChrome}/icons/left.svg") !important;
		}
		scrollbar[orient="horizontal"] > scrollbarbutton[type="increment"] {
		  background-image: url("${ProfilePathChrome}/icons/right.svg") !important;
		}
	`;

    if (hide_scrollbar_buttons === true)
        hide_scrollbar_buttons_code = `
		scrollbar scrollbarbutton {
		  opacity: 0 !important;
		}
		scrollbar[orient="vertical"] scrollbarbutton {
		  min-height: 1px !important;
		  height: 1px !important;
		  max-height: 1px !important;
		}
		scrollbar[orient="horizontal"] scrollbarbutton {
		  min-width: 1px !important;
		  width: 1px !important;
		  max-width: 1px !important;
		}
	`;

    if (custom_scrollbar_opacity === true)
        custom_scrollbar_opacity_code = `
		scrollbar {
		  opacity: ${custom_opacity_value} !important;
		}
	`;

    if (hide_scrollbars === true)
        hide_scrollbars_code = `
		scrollbar, scrollcorner {
		  display: none !important;
		  visibility: collapse !important;
		}
	`;

    if (thin_scrollbars === true)
        thin_scrollbars_code = `
		:root{
		  scrollbar-width: thin !important;
		}
		scrollbar[orient="vertical"] scrollbarbutton {
		  height: 14px !important;
		  width: 7px !important;
		}
		scrollbar[orient="horizontal"] scrollbarbutton {
		  height: 7px !important;
		  width: 14px !important;
		}
	`;

    Components.classes["@mozilla.org/content/style-sheet-service;1"]
        .getService(Components.interfaces.nsIStyleSheetService)
        .loadAndRegisterSheet(Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent(`
		${custom_scrollbars_code}
		${custom_scrollbar_arrows_code}
		${hide_scrollbar_buttons_code}
		${custom_scrollbar_opacity_code}
		${hide_scrollbars_code}
		${thin_scrollbars_code}
  `), null, null),
            Components.classes["@mozilla.org/content/style-sheet-service;1"]
                .getService(Components.interfaces.nsIStyleSheetService).AGENT_SHEET);


})();
