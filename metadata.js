// metadata.js - Companion metadata for El Toro Boat Builder Tracker
// This file holds the details (materials, prerequisites, drawings) and boat progress statuses.
// It maps items by their names from data.js.

const boatProgress = {
  // If a Phase, Component, or Step is not listed here, it defaults to false (unchecked) for all 5 boats.
  // Format: "Item Name": { "Boat 1": true/false, "Boat 2": true/false, ... }
  "Phase 1": { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
  "Assembly Framework": { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
  "Create the Building Frame": { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
  "Attach transom panels": { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
  "Hull Assembly": { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
  "Cut Hull Panels": { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false }
};

const stepDetailsMetadata = {
  // Use the exact step name as the key.
  // Add step details here as they become available.
  // Example:
  // "Create the Building Frame": {
  //   prerequisites: ["Select wood"],
  //   materials: ["2x4 Lumber"],
  //   drawing: "assets/drawings/drawing.pdf",
  //   assembly: "assets/drawings/assembly.pdf",
  //   images: ["assets/images/image1.jpg"]
  // }
};
