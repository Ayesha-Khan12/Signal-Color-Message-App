function checkSignal() {
    const color = document.getElementById("signalColor").value.trim().toLowerCase();

    if (color === "red") {
      Swal.fire({
        icon: 'error',
        title: 'Must Stop',
        text: 'The light is RED. Please stop!',
        background: '#ffcccc',
        confirmButtonColor: '#ff4d4d',
      });
    } else if (color === "yellow") {
      Swal.fire({
        icon: 'warning',
        title: 'Ready to Move',
        text: 'The light is YELLOW. Get ready to move!',
        background: '#fff3cd',
        confirmButtonColor: '#ffc107',
      });
    } else if (color === "green") {
      Swal.fire({icon: 'success',
        title: 'Move Now',
        text: 'The light is GREEN. You can go!',
        background: '#d4edda',
        confirmButtonColor: '#28a745',
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Invalid Input',
        text: 'Please enter a valid traffic signal color (Red, Yellow, Green).',
        background: '#e2e3e5',
        confirmButtonColor: '#007bff',
      });
    }
  }