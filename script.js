// Get the pet image container
const pet = document.getElementById("pet");



// Pet stat values initialized at 100
let petStats = {
  hunger: 100,
  happiness: 100,
  cleanliness: 100,
  energy: 100
};

// Utility function to keep all stat values between 0 and 100
function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

// Function to update the UI bars and values, and handle pet animations
function updateStatsUI() {
  // Update hunger bar and value
  document.getElementById("hunger-bar").style.width = petStats.hunger + "%";
  document.getElementById("hunger-val").textContent = petStats.hunger;

  // Update happiness bar and value
  document.getElementById("happiness-bar").style.width = petStats.happiness + "%";
  document.getElementById("happiness-val").textContent = petStats.happiness;

  // Update cleanliness bar and value
  document.getElementById("clean-bar").style.width = petStats.cleanliness + "%";
  document.getElementById("clean-val").textContent = petStats.cleanliness;

  // Update energy bar and value
  document.getElementById("energy-bar").style.width = petStats.energy + "%";
  document.getElementById("energy-val").textContent = petStats.energy;

  // Remove all animations before checking conditions
  pet.classList.remove("shake", "bounce", "sleep", "stinky", "dead");

  // If all stats are 0 → pet is dead
  if (
    petStats.hunger === 0 &&
    petStats.happiness === 0 &&
    petStats.cleanliness === 0 &&
    petStats.energy === 0
  ) {
    pet.classList.add("dead");
    return; // Don't do other animations when dead
  }

  // Conditional animations based on current stat values
  if (petStats.hunger < 30) {
    pet.classList.add("shake"); // Hungry
  }
  if (petStats.happiness > 70) {
    pet.classList.add("bounce"); // Happy
  }
  if (petStats.cleanliness < 20) {
    pet.classList.add("stinky"); // Dirty
  }
  if (petStats.energy === 0) {
    pet.classList.add("sleep"); // Tired
  }
}

// Action button: Feed increases hunger stat
function feed() {
  petStats.hunger = clamp(petStats.hunger + 15);
  updateStatsUI();
}

// Action button: Play increases happiness but decreases energy
function play() {
  petStats.happiness = clamp(petStats.happiness + 10);
  petStats.energy = clamp(petStats.energy - 20);
  updateStatsUI();
}

// Action button: Clean increases cleanliness
function clean() {
  petStats.cleanliness = clamp(petStats.cleanliness + 20);
  updateStatsUI();
}

// Action button: Sleep increases energy
function sleep() {
  petStats.energy = clamp(petStats.energy + 25);
  updateStatsUI();
}

// Automatically decrease all stats every 5 seconds to simulate time passing
setInterval(() => {
  petStats.hunger = clamp(petStats.hunger - 5);
  petStats.happiness = clamp(petStats.happiness - 3);
  petStats.cleanliness = clamp(petStats.cleanliness - 2);
  petStats.energy = clamp(petStats.energy - 4);
  updateStatsUI();
}, 5000); // Every 5 seconds

// Initialize UI on page load
updateStatsUI();
