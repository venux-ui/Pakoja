class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
        <ul id="slide-out" class="sidenav">
          <li><div class="user-view">
            <div class="background brown lighten-3">
          </div>
          <a><img class="circle" src="./images/avatar.jpg"></a>
          <a><span class="black-text name">Alianur Rahman</span></a>
          <a><span class="black-text email">rahman.alianur@domainm.my.id</span></a>
          </div></li>
        <li><a class="waves-effect"><i class="material-icons">account_circle</i>Tentang Penulis</a></li>
        <li><a href="mailto:contact.rahman.alianur@domainm.my.id">Contact</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">menu</a></li>
        <li><a class="waves-effect" href="#home">Home</a></li>
        <li><a class="waves-effect" href="#info">Info</a></li>
        <li><a class="waves-effect" href="#about">About</a></li>
        </ul>
        <a href="" data-target="slide-out" class="sidenav-trigger"><i class="material-icons black-text">menu</i></a>
`;
  }

}
$(document).ready(function () {
  $('.sidenav').sidenav();
});

customElements.define('side-bar', SideBar);