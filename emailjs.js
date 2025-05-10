document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = this.querySelector('input[placeholder="Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Email"]').value.trim();
    const message = this.querySelector('textarea[placeholder="Message"]').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }
  
    // Replace with your email address that will receive the message
    const recipientEmail = 'priyanshukhatridk@gmail.com';
    const subject = encodeURIComponent('Contact form message from ' + name);
    const bodyLines = [
      'Name: ' + name,
      'Email: ' + email,
      'Message:',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
  
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  
    // Open the mail client
    window.location.href = mailtoLink;
  });
  