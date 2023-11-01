document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement de soumission par défaut du formulaire

    // Récupérez les données du formulaire
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('input[name="message"]').value;

    // Créez un objet contenant les données du formulaire
    const formData = {
      name,
      phone,
      email,
      message
    };

    // Effectuez une requête POST vers Formspree
    fetch("https://formspree.io/f/xknlenrn", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Gérez la réponse de Formspree ici, par exemple, affichez un message de succès ou d'erreur.
        if (data.ok) {
          alert("Message envoyé avec succès !");
          contactForm.reset();
        } else {
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      })
      .catch(error => {
        console.error("Erreur lors de l'envoi du formulaire : ", error);
      });
  });
});
