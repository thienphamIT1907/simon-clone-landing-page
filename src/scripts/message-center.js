console.log("message center script run");
console.log(import.meta.env.VITE_SIMON_BACKEND_ENDPOINT);

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
console.log({ form });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const last_name = form.elements["last_name"].value;

  const payload = {
    first_name: "Thien",
    last_name: "Pham",
    email: "thien@gmail",
    phone: "0019293949",
    city: "New York",
    postal_code: "A1I",
    message: "Test Landing page",
    disposition_id: 1,
    division_id: 0,
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      alert("ok");
    });

  console.log({ payload });
});
