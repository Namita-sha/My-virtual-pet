MY Virtual Pet – Baby Dragon

This project is a virtual pet simulation built using HTML, CSS, and JavaScript. Users can interact with a baby dragon by feeding, playing, cleaning, and putting it to sleep. The pet's status updates dynamically through visual progress bars and behavioral animations based on its condition.

Features

- Virtual baby dragon pet with four key stats
- Interactive controls: Feed, Play, Clean, Sleep
- Stats decrease gradually over time (every 5 seconds)
- Dynamic visual feedback and animations based on stat levels
- Simple and intuitive UI with responsive design

Stat System

| Stat        | Range     | Description                          |
|-------------|-----------|--------------------------------------|
| Hunger      | 0 to 100  | 100 means full; 0 means starving     |
| Happiness   | 0 to 100  | 100 means very happy; 0 means sad    |
| Cleanliness | 0 to 100  | 100 means clean; 0 means very dirty  |
| Energy      | 0 to 100  | 100 means energetic; 0 means sleepy  |

### Automatic Decrease (Every 5 seconds)

- Hunger decreases by 4
- Happiness decreases by 3
- Cleanliness decreases by 4
- Energy decreases by 5

### Animation Triggers

| Condition           | Animation Effect            |
|---------------------|-----------------------------|
| Hunger < 30         | Shake effect                |
| Happiness > 70      | Bounce animation            |
| Cleanliness < 20    | Fade and sad appearance     |
| Energy = 0          | Lays down or slows down     |

To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Namita-sha/My-virtual-pet.git
cd My-virtual-pet
