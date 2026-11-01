const signalButton = document.querySelector("#signal-toggle");

signalButton.addEventListener("click", () => {
    const amplified = signalButton.getAttribute("aria-pressed") !== "true";

    signalButton.setAttribute("aria-pressed", String(amplified));
    signalButton.querySelector("span:last-child").textContent = amplified
        ? "SIGNAL AMPLIFIED"
        : "AMPLIFY THE SIGNAL";
    document.body.classList.toggle("signal-amplified", amplified);
});
