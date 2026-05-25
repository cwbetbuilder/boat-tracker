// El Toro Boat Building Project Tracker - Master Data
// This file serves as the data source for both the Overview page (index.html) and Step Details page (step-details.html).

const projectData = {
  projectName: "El Toro Boat Build Tracker",
  description: "This is a project tracking site for our El Toro Project. Our goal is to build and launch five El Toro boats this spring. The following pages provide build instructions and build project tracking.",
  boats: ["Boat 1", "Boat 2", "Boat 3", "Boat 4", "Boat 5"],
  
  // Hierarchical list of Phases, Components, and Steps.
  // Each item includes a status object mapping each boat to its completion state (true = checked, false = unchecked).
  phases: [
    {
      id: "phase_1",
      name: "Phase 1: Setup & Jig Construction",
      status: { "Boat 1": true, "Boat 2": true, "Boat 3": false, "Boat 4": false, "Boat 5": false },
      components: [
        {
          id: "comp_1_1",
          name: "Building the Jig",
          status: { "Boat 1": true, "Boat 2": true, "Boat 3": true, "Boat 4": false, "Boat 5": false },
          steps: [
            {
              id: "step_1_1_1",
              name: "Cut Jig Frames",
              status: { "Boat 1": true, "Boat 2": true, "Boat 3": true, "Boat 4": true, "Boat 5": false },
              prerequisites: [
                "Select straight, knot-free 2x4 pine lumber.",
                "Review the jig frame lofting drawing dimensions."
              ],
              materials: [
                "4x 2x4 Pine boards (8ft length)",
                "Box of 3-inch deck screws"
              ],
              instructions: [
                "Measure and mark cutting lines on the pine boards according to the lofting offsets.",
                "Cut the jig frame pieces using a miter saw at the designated angles.",
                "Verify frame alignment using a carpenter's square."
              ],
              drawing: "assets/drawings/jig_frames_drawing.pdf",
              assembly: "assets/drawings/jig_frames_assembly.pdf",
              images: [
                "assets/images/jig_frames_cut_1.jpg",
                "assets/images/jig_frames_cut_2.jpg"
              ]
            },
            {
              id: "step_1_1_2",
              name: "Assemble Strongback",
              status: { "Boat 1": true, "Boat 2": true, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Cut Jig Frames must be complete.",
                "Establish a flat, level workspace floor."
              ],
              materials: [
                "2x 2x6 Pine beams (10ft length)",
                "Wood glue",
                "1/4-inch lag bolts"
              ],
              instructions: [
                "Construct the strongback frame rails using the 2x6 beams.",
                "Level the assembly carefully using shims and verify with a laser level.",
                "Mount the cut jig frames onto the strongback at the specified station spacing."
              ],
              drawing: "assets/drawings/strongback_drawing.pdf",
              assembly: "assets/drawings/strongback_assembly.pdf",
              images: [
                "assets/images/strongback_1.jpg",
                "assets/images/strongback_2.jpg"
              ]
            }
          ]
        },
        {
          id: "comp_1_2",
          name: "Stem and Transom",
          status: { "Boat 1": true, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
          steps: [
            {
              id: "step_1_2_1",
              name: "Shape Stem",
              status: { "Boat 1": true, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Acquire stem wood blank (oak or mahogany laminated block)."
              ],
              materials: [
                "Laminated mahogany blank",
                "Epoxy resin and hardener"
              ],
              instructions: [
                "Trace the stem pattern template onto the mahogany blank.",
                "Band-saw near the lines, leaving a small margin for hand tooling.",
                "Bevel the stem according to the table of offsets using a drawknife and hand plane."
              ],
              drawing: "assets/drawings/stem_shaping.pdf",
              assembly: "assets/drawings/stem_assembly.pdf",
              images: [
                "assets/images/stem_shaping_1.jpg",
                "assets/images/stem_shaping_2.jpg"
              ]
            },
            {
              id: "step_1_2_2",
              name: "Cut Transom",
              status: { "Boat 1": true, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Purchase Marine-grade mahogany plywood (1/2-inch)."
              ],
              materials: [
                "1/2-inch Marine Mahogany Plywood",
                "Sandpaper (80 and 120 grit)"
              ],
              instructions: [
                "Layout the transom dimensions on the plywood sheet.",
                "Cut transom using a jigsaw with a fine wood-cutting blade.",
                "Sand the edges smooth and seal them with a light coat of epoxy."
              ],
              drawing: "assets/drawings/transom_drawing.pdf",
              assembly: "assets/drawings/transom_assembly.pdf",
              images: [
                "assets/images/transom_1.jpg",
                "assets/images/transom_2.jpg"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "phase_2",
      name: "Phase 2: Planking & Framing",
      status: { "Boat 1": true, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
      components: [
        {
          id: "comp_2_1",
          name: "Planking Panels",
          status: { "Boat 1": true, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
          steps: [
            {
              id: "step_2_1_1",
              name: "Scarph Side Panels",
              status: { "Boat 1": true, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Cut plywood sheets to rough length."
              ],
              materials: [
                "1/4-inch Okoume Marine Plywood",
                "Epoxy thickened with wood flour"
              ],
              instructions: [
                "Mark a 1:8 ratio bevel on the mating edges of the plywood sheets.",
                "Plane the bevels precisely using a block plane until they feather out.",
                "Glue the panels together under clamps using wax paper to prevent sticking to the bench."
              ],
              drawing: "assets/drawings/scarph_bevel_drawing.pdf",
              assembly: "assets/drawings/scarph_assembly.pdf",
              images: [
                "assets/images/scarph_1.jpg",
                "assets/images/scarph_2.jpg"
              ]
            },
            {
              id: "step_2_1_2",
              name: "Attach Planking to Frames",
              status: { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Scarph Side Panels complete.",
                "Stem and Transom mounted on jig."
              ],
              materials: [
                "Bronze boat nails or wood screws",
                "Epoxy adhesive"
              ],
              instructions: [
                "Dry-fit the side panels onto the jig stations to ensure correct alignment.",
                "Apply thickened epoxy to the stem, transom edges, and frame faces.",
                "Clamp panels firmly and secure with bronze fasteners."
              ],
              drawing: "assets/drawings/planking_fit.pdf",
              assembly: "assets/drawings/planking_assembly.pdf",
              images: [
                "assets/images/planking_fit_1.jpg",
                "assets/images/planking_fit_2.jpg"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "phase_3",
      name: "Phase 3: Finishes & Rigging",
      status: { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
      components: [
        {
          id: "comp_3_1",
          name: "Foils & Spars",
          status: { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
          steps: [
            {
              id: "step_3_1_1",
              name: "Shape Centerboard",
              status: { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Obtain 3/4-inch plywood or solid cedar stock."
              ],
              materials: [
                "3/4-inch Marine Plywood",
                "Fiberglass cloth (4 oz)",
                "Epoxy resin"
              ],
              instructions: [
                "Trace the foil profile onto the wood blank.",
                "Shape the leading and trailing edges to a clean NACA 0012 airfoil shape using a hand plane.",
                "Wrap the finished foil in fiberglass cloth and seal with epoxy for waterproofing."
              ],
              drawing: "assets/drawings/centerboard_profile.pdf",
              assembly: "assets/drawings/centerboard_assembly.pdf",
              images: [
                "assets/images/foil_shaping_1.jpg",
                "assets/images/foil_shaping_2.jpg"
              ]
            },
            {
              id: "step_3_1_2",
              name: "Build Mast and Boom",
              status: { "Boat 1": false, "Boat 2": false, "Boat 3": false, "Boat 4": false, "Boat 5": false },
              prerequisites: [
                "Select straight-grained Sitka Spruce or clear Douglas Fir."
              ],
              materials: [
                "Sitka Spruce blanks",
                "Marine Spar Varnish"
              ],
              instructions: [
                "Laminate the mast blanks to the required thickness.",
                "Mark and taper the mast toward the tip as shown in the spar drawings.",
                "Plane the square timber into an octagon, then sixteen-sided, and finally sand it round.",
                "Apply 5 coats of spar varnish."
              ],
              drawing: "assets/drawings/mast_spar_drawing.pdf",
              assembly: "assets/drawings/rigging_assembly.pdf",
              images: [
                "assets/images/mast_1.jpg",
                "assets/images/mast_2.jpg"
              ]
            }
          ]
        }
      ]
    }
  ]
};
