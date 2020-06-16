class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
        <div class="navbar">
            <nav class="grey lighten-3">
                <div class="nav-wrapper">
                    <side-bar></side-bar>
                    <div class="container">
                        <a class="brand-logo black-text" id="logo">PAKOJA</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="#home" class="black-text">Home</a></li>
                            <li><a href="#info" class="black-text">Info</a></li>
                            <li><a href="#about" class="black-text">About</a></li>
                            <li><a href=mailto:contact.rahman.alianur@domainm.my.id" class="black-text">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);