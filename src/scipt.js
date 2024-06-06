document.addEventListener('DOMContentLoaded', () => {
    const rooms = {
      kitchen: {
        name: "Kitchen",
        description: "A place where you can cook delicious meals.",
        image: "images/kitchen.jpg"
      },
      livingRoom: {
        name: "Living Room",
        description: "A room for relaxing and socializing.",
        image: "images/living_room.jpg"
      },
      bedroom: {
        name: "Bedroom",
        description: "A room for sleeping and resting.",
        image: "images/bedroom.jpg"
      }
    };
  
    const roomForm = document.getElementById('roomForm');
    const roomInfo = document.getElementById('roomInfo');
  
    roomForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const roomName = document.getElementById('roomName').value.trim();
      const room = rooms[roomName.toLowerCase()];
      if (room) {
        roomInfo.innerHTML = `
          <h2>${room.name}</h2>
          <p>${room.description}</p>
          <img src="${room.image}" alt="${room.name}">
        `;
      } else {
        roomInfo.innerHTML = '<p>Please enter a valid room name.</p>';
      }
    });
  });
  