document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !password || !confirmPassword) {
    alert('⚠️ Please fill out all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('⚠️ Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('⚠️ Password must be at least 6 characters.');
    return;
  }

  if (password !== confirmPassword) {
    alert('⚠️ Passwords do not match.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('⚠️ A user with this email already exists.');
    return;
  }

  const newUser = { name, email, password };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('✅ Registration successful! Redirecting to login page...');

  document.getElementById('register-form').reset();

  window.location.href = './Login.html'; 
});
s