class LayerUtama extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
    <div class="section" id="home">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row">
            <div class="col s12 center"><span class="flow-text">PANTAU KORONA JAMBI</span></div>
            <div class="col s12 center"><span class="flow-text">corona virus diseage global and indonesia live report</span></div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="section"></div>
        `;
    }
}
customElements.define('layer-utama', LayerUtama);