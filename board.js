const spaces = [
    { name: "Go", type: "corner" },
    { name: "Mediterranean Avenue", type: "property", color: "#8B4513" },
    { name: "Community Chest", type: "community" },
    { name: "Baltic Avenue", type: "property", color: "#8B4513" },
    { name: "Income Tax", type: "tax" },
    { name: "Reading Railroad", type: "railroad" },
    { name: "Oriental Avenue", type: "property", color: "#00BFFF" },
    { name: "Chance", type: "chance" },
    { name: "Vermont Avenue", type: "property", color: "#00BFFF" },
    { name: "Connecticut Avenue", type: "property", color: "#00BFFF" },
    { name: "Jail / Just Visiting", type: "corner" },
    { name: "St. Charles Place", type: "property", color: "#FF69B4" },
    { name: "Electric Company", type: "utility" },
    { name: "States Avenue", type: "property", color: "#FF69B4" },
    { name: "Virginia Avenue", type: "property", color: "#FF69B4" },
    { name: "Pennsylvania Railroad", type: "railroad" },
    { name: "St. James Place", type: "property", color: "#FFA500" },
    { name: "Community Chest", type: "community" },
    { name: "Tennessee Avenue", type: "property", color: "#FFA500" },
    { name: "New York Avenue", type: "property", color: "#FFA500" },
    { name: "Free Parking", type: "corner" },
    { name: "Kentucky Avenue", type: "property", color: "#FF0000" },
    { name: "Chance", type: "chance" },
    { name: "Indiana Avenue", type: "property", color: "#FF0000" },
    { name: "Illinois Avenue", type: "property", color: "#FF0000" },
    { name: "B. & O. Railroad", type: "railroad" },
    { name: "Atlantic Avenue", type: "property", color: "#FFFF00" },
    { name: "Ventnor Avenue", type: "property", color: "#FFFF00" },
    { name: "Water Works", type: "utility" },
    { name: "Marvin Gardens", type: "property", color: "#FFFF00" },
    { name: "Go To Jail", type: "corner" },
    { name: "Pacific Avenue", type: "property", color: "#008000" },
    { name: "North Carolina Avenue", type: "property", color: "#008000" },
    { name: "Community Chest", type: "community" },
    { name: "Pennsylvania Avenue", type: "property", color: "#008000" },
    { name: "Short Line", type: "railroad" },
    { name: "Chance", type: "chance" },
    { name: "Park Place", type: "property", color: "#0000CD" },
    { name: "Luxury Tax", type: "tax" },
    { name: "Boardwalk", type: "property", color: "#0000CD" }
];

const board = document.getElementById('board');

spaces.forEach((space, i) => {
    const div = document.createElement('div');
    div.className = 'space ' + space.type;
    div.textContent = space.name;
    if (space.color) {
        const bar = document.createElement('div');
        bar.className = 'color-bar';
        bar.style.background = space.color;
        div.appendChild(bar);
    }

    let row, col;
    if (i <= 10) {
        // Top row, left to right
        row = 1;
        col = i + 1;
    } else if (i <= 20) {
        // Right column, top to bottom
        col = 11;
        row = (i - 10) + 1;
    } else if (i <= 30) {
        // Bottom row, right to left
        row = 11;
        col = 11 - (i - 20);
    } else {
        // Left column, bottom to top
        col = 1;
        row = 11 - (i - 30);
    }

    div.style.gridRowStart = row;
    div.style.gridColumnStart = col;
    board.appendChild(div);
});

const player = {
    position: 0,
    tokenelement: document.createElement('div')
}