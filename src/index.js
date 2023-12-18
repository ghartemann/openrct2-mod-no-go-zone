// Expose the OpenRCT2 to Visual Studio Code's Intellisense
/// <reference path="OPENRCT2PATH/bin/openrct2.d.ts" />

import Oui from "./OliUI"

const main = function() {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("No go zone", function() {
        CreateWindow();
    });
};

function CreateWindow()
{
    const window = new Oui.Window("My Window");
    window.setWidth(300);

    const groupbox = new Oui.GroupBox("Set up a no go zone");
    window.addChild(groupbox);

    const startButton = new Oui.Widgets.Button("Start", () => {
        defineNoGoZone();
    });

    const clearButton = new Oui.Widgets.Button("Clear all", () => {
        clearNoGoZone();
    });

    groupbox.addChild(startButton);
    groupbox.addChild(clearButton);

    window.open();
}

function defineNoGoZone() {
    setPatrolTiles();
}

function setPatrolTiles() {
    for (let i = 0; i < map.numEntities; i++) {
        const entity = map.getEntity(i);

        if (entity && entity.peepType && entity.peepType !== 'guest') {
            entity.patrolArea.clear();

            if (entity.staffType === 'mechanic') {
                entity.patrolArea.add(getAllTiles());
                console.log(entity.patrolArea);
            }
        }
    }
}

function clearNoGoZone(entity) {
    for (let i = 0; i < map.numEntities; i++) {
        const entity = map.getEntity(i);

        if (entity && entity.peepType && entity.peepType !== 'guest') {
            console.log(entity.patrolArea);
            entity.patrolArea.clear();
        }
    }
}

function getAllTiles() {
    const tiles = [];

    for (let x = 5; x < map.size.x - 5; x++) {
        for (let y = 5; y < map.size.y - 5; y++) {
            const tile = map.getTile(x, y);
            const nbElements = tile.numElements;

            for (let i = 0; i < nbElements; i++) {
                const element = tile.getElement(i);

                tiles.push({x: x, y: y});

                if (element.hasOwnerShip === true && element.surface !== 'water') {

                }
            }
        }
    }

    return tiles;
}

registerPlugin({
    name: "NoGoZone",
    version: "0.1.0",
    licence: "MIT",
    authors: ["NotKrankor"],
    type: "local",
    minApiVersion: 7,
    main: main
});
