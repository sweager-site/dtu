<script lang="ts">
  import { link, location } from 'svelte-spa-router';
  import { derived } from 'svelte/store';
  const activePath = derived(location, $location => $location.split('?')[0]);
  const logoUrl = '/vite.svg';
</script>

<nav class="navbar-container">
  <div class="navbar-content">
    <div class="navbar-section left">
      <a href="#/" use:link class:active={$activePath === '/'}>Главная</a>
      <a href="#/events" use:link class:active={$activePath === '/events'}>Мероприятия</a>
    </div>
    <div class="navbar-section center">
      <a href="#/" use:link class="logo-link">
        <img src={logoUrl} alt="Логотип" class="logo-image" />
      </a>
    </div>
    <div class="navbar-section right">
      <a href="#/news" use:link class:active={$activePath === '/news'}>Новости</a>
      <a href="#/directions" use:link class:active={$activePath === '/directions'}>Наши направления</a>
    </div>
  </div>
</nav>

<style>
  .navbar-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .navbar-content {
    width: 100%;
    max-width: 1440px;
    height: 64px;
    background-color: #ffffff;
    border-radius: 11px;
    border: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .navbar-section {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .navbar-section.left {
    justify-content: flex-start;
  }

  .navbar-section.center {
    justify-content: center;
    flex-grow: 1;
  }

  .navbar-section.right {
    justify-content: flex-end;
  }

  .navbar-section a {
    text-decoration: none;
    color: #333;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    font-size: 16px;
  }

  .navbar-section a.active {
    background-color: #111111;
    color: #ffffff;
  }

  .navbar-section a:not(.active):hover {
    background-color: #f0f0f0;
  }

  .logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-image {
    height: 40px; 
    width: auto;
  }

  @media (max-width: 768px) {
    .navbar-content {
      flex-direction: column;
      height: auto;
      padding: 10px;
    }
    .navbar-section {
      width: 100%;
      justify-content: center;
      margin-bottom: 10px;
      gap: 10px;
    }
    .navbar-section:last-child {
      margin-bottom: 0;
    }
    .navbar-section a {
      font-size: 14px;
      padding: 6px 10px;
    }
  }

  @media (max-width: 480px) {
    .navbar-section a {
      font-size: 12px; 
      padding: 5px 8px;
    }
     .navbar-section.left,
     .navbar-section.right {
        flex-direction: column;
        gap: 5px;
     }
  }
</style>