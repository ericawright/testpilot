export default `
  <section class="navbar">
      <div data-hook="active-user" id="expanded-branding">
        <div class="wrapper">
          <header>
            <div class="firefox-logo"></div>
            <h1>Idea Town</h1>
            <p class="subtitle">The innovative community where new Ideas for Firefox are tested.</p>
          </header>
          <div class="town-background"></div>
          <div id="avatar-wrapper">
            <img class="avatar" width="41" height="41" data-hook="logout">
            <span class="default-avatar" data-hook="logout"></span>
          </div>
        </div>
      </div>
      <div data-hook="inactive-user" id="tabzilla">
        <a href="https://www.mozilla.org/">Mozilla</a>
      </div>
  </section>
`;
