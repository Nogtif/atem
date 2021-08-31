<template>
  <header class="header">
    <div class="headingWall">
      <div class="gradientWallpaper"></div>
    </div>
    <div class="container">
      <nav class="navbar">
        <div class="nav_side">
          <a href="./" class="logo">
            Atem<span>CMS</span>
          </a>
          <div class="menu">
            <label for="menu" class="btn_menu"><i class="mdi mdi-menu"></i></label>
            <input type="checkbox" id="menu" class="btn_menu" />
            <ul class="navigation">
              <li class="nav_item">
                <a>Communauté</a>
                <ul class="dropdown">
                  <li><a href="./news">Actualités</a></li>
                  <li><a href="./news">L'équipe</a></li>
                  <li><a href="./news">Nos Partenaires</a></li>
                </ul>
              </li>
              <li class="nav_item">
                <a>Animes</a>
              </li>
              <li class="nav_item">
                <a>Calendrier</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="tool_bar">
          <form @submit.prevent="searchAnimes" class="icon_action">
            <input id="search" type="text" v-model="query" autocomplete="off">
            <i class="mdi mdi-magnify" aria-hidden="true"></i>
          </form>
          <div>
            <a href="" class="btn btn_primary">Connexion</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    searchAnimes() {
      return null;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
@import '../style/mixins.scss';
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;

  .headingWall {
    position: absolute;
    background-color: #1e2022;
    width: 100%;
    height: 350px;
    background: url('https://a-static.besthdwallpaper.com/one-piece-pirate-king-monkey-d-luffy-fond-d-ecran-3840x1080-8441_75.jpg') center;
    background-size: cover;
    opacity: .4;

    .gradientWallpaper {
      width: 100%;
      height: 100%;
      background-image: -moz-linear-gradient(0deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, $bg-primary 0%, rgba(32, 167, 196, 0) 100%);
      background-image: -webkit-linear-gradient(0deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, $bg-primary 0%, rgba(32, 167, 196, 0) 100%);
      background-image: linear-gradient(0deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, $bg-primary 0%, rgba(32, 167, 196, 0) 100%);
    }
  }

  nav.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    .nav_side {
      display: flex;
    }

    .logo {
      font-family: 'Luckiest Guy', cursive;
      display: flex;
      align-items: center;
      font-size: 2rem;
      opacity: 1;
      @include transition(all .3s ease-out 0s);

      &:hover {
        opacity: 1;
      }

      span {
        color: $color-primary;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      margin: 1em 0;

      label {
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 1.8em;
        margin-left: 1em;
        opacity: .95;

        &:hover {
          opacity: 1;
        }
      }

      input {
        display: none;
      }

      .btn_menu ~ ul {
        display: none;
      }
      
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        padding: 0 1.5em;

        .nav_item {
          margin: 0 16px;
          position: relative;
          cursor: pointer;
    
          & > a {
            font-size: .85rem;
            line-height: 24px;
            font-weight: 700;
            padding: 20px 0;
            color: #fff;
            text-transform: uppercase;
            position: relative;
            opacity: .85;
            @include transition(all .3s ease-out 0s);
            
            &::before {
              position: absolute;
              content: '';
              width: 32px;
              height: 4px;
              background: #4B76AD;
              left: 50%;
              margin: 0 2px;
              bottom: 8px;
              @include transform(translate(-50%) scaleX(0));
              @include transition(all .3s ease-out 0s);
            }
          }
    
          &:hover {
            a {
              opacity: 1;
    
              &::before {
              @include transform(translate(-50%) scaleX(1));
              }
            }
          }
        }

        li > .dropdown {
          position: absolute;
          visibility: hidden;
          opacity: 0;
          flex-direction: column;
          background: #fff;
          margin-top: 1em;
          padding: .5em 0;
          min-width: 150px;
          border-radius: .25rem;
          @include transition(all .3s ease-out 0s);

          &::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 20px;
            width: 0;
            height: 0;
            border: 0 solid transparent;
            border-right-width: 5px;
            border-left-width: 5px;
            border-bottom: 5px solid #fff;
          }

          li {
            width: 100%;
            position: relative;
          }

          a {
            color: #768089;
            font-size: .8em;
            font-weight: 500;
            width: 100%;
            display: block;
            padding: .75em 1.3em;
            border-radius: 3px;
            &:hover {
              color: #000;
              background: rgba(0, 0, 0, .1);
            }
          }
        }
        li:hover ul {
          visibility: visible;
          opacity: 1;
        }
      }

      @media (max-width: 993px) {
        ul {
          flex-direction: column;
          padding: 0;
          position: relative;

          .nav_item{
            margin: 0;
            width: 100%;
            display: block;
            & > a {
              color: #000;
              padding: .85em 1rem;
              display: block;
              opacity: .7;
              
              &::before {
                content: none;
              }
              
              &:hover {
                background: rgba(0, 0, 0, .1);
                opacity: 1;
              }
            }

            &:hover {              
              background: rgba(0, 0, 0, .1);

              ul {
                display: block;
              }
            }

            & ul {
              display: none;
              position: relative;
              margin: 0;
            }
          }
        }
        input[type='checkbox']:checked.btn_menu ~ ul {
          display: flex;
          position: absolute;
          margin: 0 auto;
          top: 73px;
          width: 30%;
          left: 30px;
          color: #737f8a;
          background: #fff;
          border-radius: 5px;
          z-index: 15;
          min-width: 250px;

          &::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 25%;
            width: 0;
            height: 0;
            border: 0 solid transparent;
            border-right-width: 5px;
            border-left-width: 5px;
            border-bottom: 5px solid #fff;
          }
        }
      }

      @media (min-width: 992px) {
        input.btn_menu,
        label.btn_menu {
          display: none;
        }
        input[type='checkbox'].btn_menu ~ ul {
          display: flex;
        }
      }
    }

    .tool_bar {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      form {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        input[type="text"] {
          background-color: rgba($color: #fff, $alpha: .2);
          height: 25px;
          border: 2px solid rgba($color: #fff, $alpha: .3);
          border-radius: .25rem;
          outline: none;
          margin-right: .25em;
          font-size: .85em;
          padding: .10rem .5rem;
          padding-left: 1.9rem;
          max-width: 125px;
          color: rgba($color: #fff, $alpha: .9);
          @include transition(all .5s ease-out 0s);

          &:focus {
            border-color: rgba($color: #fff, $alpha: .5);
            max-width: 200px;
          }
        }

        @media (max-width: 1201px) {
          input[type="text"] {
            display: none;
          }
        }

        i {
          position: absolute;
          left: 0;
          top: 0;
          padding: 6px 8px;
          color: rgba($color: #fff, $alpha: .9);
          transition: 0.3s;
        }
      }
      

      .btn_search {
        padding: 0;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        justify-content: center;
        line-height: 1.33;
        border: 2px solid $color-primary;
        border-radius: 0 .3rem .3rem 0;
      }

      .icon_action {
        position: relative;
        color: rgba($color: #fff, $alpha: .85);
        margin-right: 2.4em;
        display: flex;
        align-items: center;
        cursor: pointer;

        i {
          font-size: 1.25rem;
        }

        &::after {
          position: absolute;
          content: '';
          background-color: rgba($color: #fff, $alpha: .5);
          height: 2em;
          width: 2px;
          right: -18px;
          
        }
      }
    }
  }
}
</style>