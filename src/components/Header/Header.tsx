import { ref, defineComponent } from 'vue';
import './Header.scss';

export default defineComponent({
  setup() {
    const query = ref(0);

    return () => (
      <>
        <header class="header">
          <nav class="navbar">
            <div class="nav_side">
              <a href="./" class="logo">Atem<span>CMS</span></a>
              <div class="menu">
                <label for="menu" class="btn_menu"><i class="mdi mdi-menu"></i></label>
                <input type="checkbox" id="menu" class="btn_menu" />
                <ul class="navigation">
                  <li class="nav_item">
                    <a>
                      <i class="mdi mdi mdi-earth" />Communauté
                    </a>
                    <ul class="dropdown">
                      <li><a href="./news">Actualités</a></li>
                      <li><a href="./news">L'équipe</a></li>
                      <li><a href="./news">Nos Partenaires</a></li>
                    </ul>
                  </li>
                  <li class="nav_item">
                    <a>
                      <i class="mdi mdi-book-open-variant" />Mangas
                    </a>
                  </li>
                  <li class="nav_item">
                    <a>
                      <i class="mdi mdi-discord" />Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="tool_bar">
            <a href="" class="btn btn_primary">Connexion</a>
          </div>
        </header>
        <div class="headingWall">
          <div class="gradientWallpaper"></div>
        </div>
      </>
    );
  }
});
