<template>
  <header>
    <div class="navbar-header">
      <a class="logo" href="./">
        <img src="../assets/img/logo.png" alt="logo">
      </a>
    </div>

    <nav>
      <label for="menu-btn" class="jm-menu-btn jm-icon-menu"></label>
      <input type="checkbox" id="menu-btn" class="jm-menu-btn">
      <ul class="jm-collapse">
        <li class="jm-dropdown">
          <a class="nav_case">Communauté</a>
          <ul>
            <li><a href="./news">Actualités</a></li>
            <li><a href="./news">L'équipe</a></li>
            <li><a href="./news">Nos Partenaires</a></li>
          </ul>
        </li>
        <li class="jm-dropdown">
          <a class="nav_case">Animes</a>
        </li>
        <li class="jm-dropdown">
          <router-link :to="{ name: 'About' }" class="nav_case">Films</router-link>
        </li>
      </ul>
    </nav>

    <div class="topbar-actions">
      <div class="nav-icons">
        <a href="https://discord.com/invite/nqdVUr7" target="_blank">
          <i class="mdi mdi-magnify"></i>
        </a>
      </div>
      <a href="#" class="btn btn-primary">Se connecter</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin: 1.4em 0 7em;

  & > .topbar-actions:last-child {
    margin-left: auto;
  }

  .logo img {
    height: 50px;
  }

  .topbar-actions {
    display: flex;
  }

  nav ul {
    margin: 0;
    padding: 0;
    margin-left: 1.8em;
    list-style: none;
  }
}

input.jm-menu-btn {
    display: none;
}

.jm-menu-btn~.jm-collapse {
    display: none;
}

label.jm-menu-btn {
    color: #fff;
    cursor: pointer;
    display: block;
    float: right;
    margin: 0;
    margin-left: 20px;
    line-height: 50px;
    font-size: 25px;
    opacity: .7;
}

label.jm-menu-btn:hover {
    opacity: 1;
}

.visible {
    display: block;
}

nav ul li ul {
    margin-left: 0px;
}

nav a {
    color: #dedede;
    display: inline-block;
    padding: 16px 32px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
}

nav a:hover {
    color: #FFF;
}

nav a.active {
    color: #4F9ED3;
    opacity: 1;
}

nav ul ul {
    display: none;
}

.jm-dropdown:hover ul {
    display: block;
}

.jm-dropdown ul {
    background: #fff;
    padding: 0;
}

.jm-dropdown ul li {
    width: 100%;
}

.jm-dropdown ul a,
.jm-dropdown:hover ul a {
    color: #768089;
    font-size: 13px;
    width: 100%;
    border-radius: 3px;
}

.jm-dropdown ul a:hover,
.jm-dropdown:hover ul a:hover {
    color: #000;
    background: rgba(0, 0, 0, .1);
}

.jm-dropdown ul ul {
    border-bottom: 1px #ccc solid;
    border-top: 1px #ccc solid;
    margin-bottom: 16px;
    max-width: 100%;
    position: relative;
}

.jm-icon-dropdown {
    border: solid #959595;
    border-width: 0 2px 2px 0;
    display: inline-block;
    margin: 0 0 3px 8px;
    padding: 3px;
    transform: rotate(45deg);
}

li:hover .jm-icon-dropdown {
    border-color: #fff;
}

.jm-icon-menu::before {
    content: '\2630';
}

@media (max-width: 993px) {
  nav a {
    color: #000;
    opacity: .7;

    &:hover {
    color: #000;
      opacity: 1;
    }
  }
  input[type='checkbox']:checked.jm-menu-btn~.jm-collapse {
    display: block;
    position: absolute;
    margin: 0 auto;
    top: 73px;
    width: 40%;
    left: 30px;
    color: #737f8a;
    background: #fff;
    border-radius: 5px;
    z-index: 15;
    min-width: 250px;
  }
}

@media (min-width: 992px) {
  nav li {
      display: inline-block;
  }
  nav a {
      padding: 15px;
  }
  .jm-dropdown {
      position: relative;
  }
  .jm-dropdown li a {
      display: block;
      padding: 8px 16px;
      white-space: nowrap;
  }
  .jm-dropdown ul {
      border-radius: 5px;
      padding: 10px 5px;
      box-shadow: 0 0 2em #18191C;
      position: absolute;
      min-width: 100%;
  }
  input.jm-menu-btn,
  label.jm-menu-btn {
      display: none;
  }
  input[type='checkbox'].jm-menu-btn~.jm-collapse,
  .jm-collapse {
    display: inline-block;
  }
}

li.jm-dropdown>a:after {
    content: ' \F140';
    font-family: "Material Design Icons";
}

li.jm-dropdown>a:only-child:after {
    content: '';
}

.nav_case {
    text-transform: upperCase;
    font-weight: 700;
}

.btn-group,
.btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.topbar-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > .nav-icons {
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    &:after {
      content: '';
      background: #2C2D30;
      width: 1px;
      height: 80%;
    }

    a {
      font-size: 1.3rem;
      color: #fff;
      padding: 0 .5em;
      opacity: .8;

      &:last-child {
        padding-right: .8em;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>