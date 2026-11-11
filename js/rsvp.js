/*
     * GOOGLE APPS SCRIPT WEB APP
     *
     * Replace this with your deployed Apps Script Web App URL:
     * https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
     *
     * The same Apps Script endpoint can handle:
     * 1. Guest validation through GET ?action=validateGuest
     * 2. RSVP submission through POST
     */
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0dRxHB0ZrpDVihnBQIUtovZS6B_gu_Dg0gr8IKxhrWhf07qC9GbTOvi7gsubYr-Y7zg/exec";

    const validationStep = document.getElementById("guestValidationStep");
    const rsvpStep = document.getElementById("rsvpStep");
    const validationForm = document.getElementById("guestValidationForm");
    const validationMessage = document.getElementById("validationMessage");
    const rsvpName = document.getElementById("name");
    const changeGuest = document.getElementById("changeGuest");
    const reservedGuestCount = document.getElementById("reservedGuestCount");

    /*
     * STEP 1 — VALIDATE GUEST AGAINST GOOGLE SHEET
     */
    validationForm.addEventListener("submit", async function(e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const btn = this.querySelector('button[type="submit"]');

      validationMessage.classList.remove("success");
      validationMessage.style.display = "none";

      if (APPS_SCRIPT_URL.includes("PASTE_YOUR")) {
        alert("Please add your Google Apps Script Web App URL in rsvp.html first.");
        return;
      }

      btn.disabled = true;
      btn.textContent = "Checking...";

      try {
        const url =
          `${APPS_SCRIPT_URL}` +
          `?action=validateGuest` +
          `&firstName=${encodeURIComponent(firstName)}` +
          `&lastName=${encodeURIComponent(lastName)}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Validation request failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result.found) {
          validationMessage.textContent =
            "You are not in the list, please contact Dimple or Rusbel to validate the list.";
          validationMessage.style.display = "block";
          return;
        }

        validationMessage.textContent = "Guest validated successfully.";
        validationMessage.classList.add("success");
        validationMessage.style.display = "block";

        // Use the exact name returned by Google Sheets.
        rsvpName.value =
          `${result.firstName || firstName} ${result.lastName || lastName}`.trim();

        // Optional: save validated guest information for RSVP submission.
        rsvpName.dataset.firstName = result.firstName || firstName;
        rsvpName.dataset.lastName = result.lastName || lastName;

        const guestCount = Number(result.guestCount || 1);
        const displayFirstName = result.firstName || firstName;
        const guestWord = guestCount === 1 ? "guest" : "guests";

        reservedGuestCount.textContent =
          `${guestCount} ${guestWord} reserved including ${displayFirstName}`;
        reservedGuestCount.dataset.guestCount = String(guestCount);

        window.setTimeout(() => {
          validationStep.hidden = true;
          rsvpStep.hidden = false;
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 350);

      } catch (error) {
        console.error("Guest validation error:", error);

        validationMessage.textContent =
          "We could not validate your name right now. Please try again.";
        validationMessage.style.display = "block";

      } finally {
        btn.disabled = false;
        btn.textContent = "Validate Guest";
      }
    });

    /*
     * RETURN TO THE VALIDATION SCREEN
     */
    changeGuest.addEventListener("click", () => {
      rsvpStep.hidden = true;
      validationStep.hidden = false;

      validationForm.reset();
      validationMessage.style.display = "none";

      document.getElementById("rsvpForm").reset();
      rsvpName.dataset.firstName = "";
      rsvpName.dataset.lastName = "";
      reservedGuestCount.textContent = "";
      reservedGuestCount.dataset.guestCount = "";

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    /*
     * STEP 2 — SUBMIT RSVP TO GOOGLE SHEET
     */
    document.getElementById("rsvpForm").addEventListener("submit", async function(e) {
      e.preventDefault();

      const btn = this.querySelector('button[type="submit"]');
      const msg = document.getElementById("message");

      if (APPS_SCRIPT_URL.includes("PASTE_YOUR")) {
        alert("Please add your Google Apps Script Web App URL in rsvp.html first.");
        return;
      }

      btn.disabled = true;
      btn.textContent = "Sending...";
      msg.style.display = "none";

      // FormData contains the RSVP fields on this page:
      // name, attendance, and notes.
      const data = new URLSearchParams(new FormData(this));

      // Add validated guest data and submission timestamp.
      data.append("action", "submitRsvp");
      data.append("firstName", rsvpName.dataset.firstName || "");
      data.append("lastName", rsvpName.dataset.lastName || "");
      data.append("guestCount", reservedGuestCount.dataset.guestCount || "");
      data.append("submittedAt", new Date().toISOString());

      try {
        /*
         * mode: "no-cors" is kept from your previous RSVP implementation.
         * This means the browser cannot inspect the Apps Script response,
         * but the submission will still be sent.
         */
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: data
        });

        msg.textContent = "Thank you! Your RSVP has been received.";
        msg.style.display = "block";

      } catch (error) {
        console.error("RSVP submission error:", error);

        msg.textContent =
          "We could not send your RSVP. Please try again.";
        msg.style.display = "block";

      } finally {
        btn.disabled = false;
        btn.textContent = "Send RSVP";
      }
    });
