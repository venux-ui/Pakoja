import DataTable from '../view/main.js';
class DataTampil extends HTMLElement {
    conectedCallback() {
        this.render();
    }

    render(DataTable) {
        this.innerHTML = "";
        this._responseJson = DataTable;
        console.log(this._responseJson);
        this._responseJson.forEach(element => {
            this.innerHTML += /*html*/ `
            <tr>
                    <td>d</td>
                    <td>j</td>
                    <td>j</td>
                    <td>j</td>
                </tr>
            `;
        });
    }
}
customElements.define('data-tampil', DataTampil);