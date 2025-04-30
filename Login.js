document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  
  if (!email || !password) {
    alert('Please enter your email and password.');
    return;
  }

  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert('Login successful!');
  
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = './Index.html';
    } else {
    alert('Invalid credentials.');
  }
});