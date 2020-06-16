class Info extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
            <div class="col s12">
                <div class="card">
                    <div class="card-content black-text">
                        <span class="card-title">Covid 19</span>
                        <p>Pandemi Koronavirus 2019–2020 atau dikenal sebagai pandemi COVID-19
                            adalah peristiwa menyebarnya penyakit koronavirus 2019
                            (bahasa Inggris: coronavirus disease 2019, disingkat COVID-19)
                            di seluruh dunia. Penyakit ini disebabkan oleh koronavirus jenis
                            baru yang diberi nama SARS-CoV-2.
                            Wabah COVID-19 pertama kali dideteksi di Kota Wuhan, Provinsi Hubei,
                            Tiongkok pada bulan Desember 2019, dan ditetapkan sebagai pandemi oleh
                            Organisasi Kesehatan Dunia (WHO) pada 11 Maret 2020. Hingga 23 April 2020,
                            lebih dari 2.000.000 kasus COVID-19 telah dilaporkan di lebih dari 210
                            negara dan wilayah, mengakibatkan lebih dari 195,755 orang meninggal dunia
                            dan lebih dari 781,109 orang sembuh.</p>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('in-fo', Info);