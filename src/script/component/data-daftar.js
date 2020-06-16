class DataDaftar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
    <style>
        .coba{
            width:100%;
            height:100%;
        }
    </style>
        <div class="card" id="info">
                <img class="coba" src="./images/bahan.png">
            <div class="card-content">
                <h3 class="center">Global Update</h3>
            </div>
            <div class="card-tabs">
                <ul class="tabs tabs-fixed-width">
                    <li class="tab"><a href="#positif"><i class="material-icons">add</i>positif</a></li>
                    <li class="tab"><a class="active" href="#sembuh"><i class="material-icons">mood</i>sembuh</a></li>
                    <li class="tab"><a href="#meninggal"><i class="material-icons">mood_bad</i>meninggal</a></li>
                    <li class="tab"><a href="#update"><i class="material-icons">calendar_today</i>update</a></li>
                </ul>
            </div>
            <div class="card-content grey lighten-4">
                <div><h1 class="center" id="positif"></h1></div>
                <div><h1 class="center" id="sembuh"></h1></div>
                <div><h1 class="center" id="meninggal"></h1></div>
                <div"><h4 class="center" id="update"></h4></div>
            </div>
        </div>
        `;
    }
}
$(document).ready(function () {
    $('.tabs').tabs();
});

customElements.define('data-daftar', DataDaftar);