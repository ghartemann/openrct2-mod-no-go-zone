// Expose the OpenRCT2 to Visual Studio Code's Intellisense
/// <reference path="OPENRCT2PATH/bin/openrct2.d.ts" />

import Oui from "./OliUI"

function CreateWindow()
{
    const window = new Oui.Window("My Window");
    window.setWidth(300);

    const label = new Oui.Widgets.Label("No Go Zones");
    window.addChild(label);

    const groupbox = new Oui.GroupBox("Set up a no go zone");
    window.addChild(groupbox);

    const button = new Oui.Widgets.Button("Start", () => {
        // Implementing callbacks is a breeze.
        defineNoGoZone();
        console.log('test');
    });
    groupbox.addChild(button);

    window.open();
}

function defineNoGoZone() {
    console.log('test');
    // Get the tile under the mouse cursor
    // var tile = ui.tileSelection.tile;
    // // Get the tile element
    // var tileElement = map.getTile(tile.x, tile.y);
    // // Set the tile element to be a no go zone
    // tileElement.flags |= TileFlags.NoEntry;
    // // Update the tile element
    // map.setTile(tile.x, tile.y, tileElement);
}

var main = function() {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("No go zone", function() {
        CreateWindow();
    });
};

registerPlugin({
    name: "NoGoZone",
    version: "0.1.0",
    licence: "MIT", // Make sure to set the license prior to release
    authors: ["NotKrankor"],
    type: "local",
    main: main
});
