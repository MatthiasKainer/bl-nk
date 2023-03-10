const css = `
@keyframes blink {
  0% {
  	opacity: 100%;
  }
  50% {
  	opacity: 0%;
  }
  100% {
  	opacity: 100%;
  }
}

:host {
  display: inline-block;
  color: var(--blink-color);
  font-size: var(--blink-size);
  --blink-interval: 1s;
  animation: blink var(--blink-interval) infinite;
}`

document.documentElement.style.setProperty('--rainbow-vertical', 'linear-gradient(to bottom, Red , Orange, Yellow, Green, Blue, Indigo, Violet)');
document.documentElement.style.setProperty('--rainbow-horizontal', 'linear-gradient(to right, Red , Orange, Yellow, Green, Blue, Indigo, Violet)');

// Register custom element "bl-nk"
customElements.define("bl-nk", class extends HTMLElement {
  constructor() {
    super();
    this._blinkInterval = null;
    const shadowRoot = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = css;
    const slot = document.createElement("slot");
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(slot);
  }

  static get observedAttributes() {
    return ["interval", "color", "size"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "interval") {
      this.style.setProperty("--blink-interval", newValue);
    }
    if (name === "color") {
      this.style.setProperty("--blink-color", newValue);
    }
    if (name === "size") {
      this.style.setProperty("--blink-size", newValue);
    }
  }
});
