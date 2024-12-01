document.getElementsByClassName('login button').addEventListener('click',function(){
    const name = document.getElementsByClassName('user').value;
    const roll_no = document.getElementsByClassName('user').value;
    const room_no = document.getElementsByClassName('user').value;
      if (name && roll_no && room_no) {
        // Navigate to the next page
        window.location.href = 'main.html'; // Replace with your actual page
      } else {
        alert('Please fill out all fields.');
      }
    });
