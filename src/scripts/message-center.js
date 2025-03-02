const BASE_URL =
  `${
    import.meta.env.VITE_SIMON_BACKEND_ENDPOINT
  }/message-center/landing-page` ||
  "http://localhost:3000/message-center/landing-page";

const disposition = {
  estimateResidential: 1,
  estimateCommercial: 2,
  existingEstimate: 3,
  complaint: 4,
  warranty: 5,
  employment: 6,
  messageForOffice: 7,
};

const division = {
  painting: 0,
  cleaning: 1,
};

const form = document.getElementById("painting-estimate-submit-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const last_name = form.elements["last_name"].value;
  const first_name = form.elements["first_name"].value;
  const email = form.elements["email"].value;
  const home_phone = form.elements["home_phone"].value;
  const city = form.elements["city"].value;
  const postal_code = form.elements["postal_code"].value;
  const what_needs_painting = form.elements["what_needs_painting"].value;

  const payload = {
    last_name,
    first_name,
    email,
    phone: home_phone,
    city,
    postal_code,
    message: what_needs_painting,
    division_id: division.painting,
    disposition_id: disposition.estimateResidential,
  };

  fetch("/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      Toastify({
        text: data?.message,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#96c93d",
        },
      }).showToast();
    })
    .catch((err) => console.error("Error:", err));
});
