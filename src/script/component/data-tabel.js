class DataTabel extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render(responseJson) {
        this._responseJson = responseJson;
        this.innerHTML = /*html*/ `
        <div class="card">
        <table class="card-content centered">
            <thead>
                <tr>
                    <th>provinsi</th>
                    <th>positif</th>
                    <th>sembuh</th>
                    <th>meninggal</th>
                </tr>
            </thead>
            <tbody>
                <data-tampil></data-tampil>
            </tbody>
        </table>
    </div>
        
        `;
    }
}
customElements.define('data-tabel', DataTabel);