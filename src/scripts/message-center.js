console.log("message center script run");
console.log(import.meta.env.VITE_SOME_KEY);

// const BASE_URL =
//   import.meta.env.NEXT_PUBLIC_API_KEY ||
//   "http://localhost:3000/message-center/landing-page";

const BASE_URL = "https://simon-api-dev.enosta.com/message-center/landing-page";



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
    last_name,
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
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      referrerPolicy: "no-referrer-when-downgrade",
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
