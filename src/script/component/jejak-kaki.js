class JejakKaki extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = /*html*/ `
        <style>
        body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    }
    main {
        flex: 1 0 auto;
    }
        </style>
<footer class="grey darken-3" id="about">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Pantau Korona Jambi</h5>
                <p class="grey-text text-lighten-4">web app pantau covid asal jambi dengan
                    menggunakan fundamental html, materialize-css, dan vanilla js,serta beberapa devtool</p>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                    <li><a class="grey-text text-lighten-3" href="mailto:contact.rahman.alianur@domainm.my.id">email: rahman.alianur@domainm.my.id</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container brown-text text-lighten-3">
            © 2020 PAKOJA
        </div>
    </div>
</footer>
        `;
    }
}
customElements.define('jejak-kaki', JejakKaki);