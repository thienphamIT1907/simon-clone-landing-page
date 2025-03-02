console.log("hello");

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

const form = document.getElementById("painting-application-submit-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const last_name = form.elements["last_name"].value;
  const first_name = form.elements["first_name"].value;
  const email = form.elements["email"].value;
  const phone = form.elements["phone"].value;
  const city = form.elements["city"].value;
  const postal_code = form.elements["postal_code"].value;
  const message = form.elements["message"].value;

  const payload = {
    last_name,
    first_name,
    email,
    phone,
    city,
    postal_code,
    message,
    division_id: division.painting,
    disposition_id: disposition.employment,
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
