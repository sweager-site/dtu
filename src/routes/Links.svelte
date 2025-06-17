<script>
  import { link } from 'svelte-spa-router';
</script>

<div class="links-container">
  <div class="title-container">
    <div class="accent-line"></div>
    <h1>Полезные ссылки</h1>
  </div>

  <div class="links-section">
    <h2>Федеральный уровень</h2>
    <ul>
      <li><a href="https://edu.gov.ru/" target="_blank" rel="noopener noreferrer">Министерство просвещения РФ</a></li>
    </ul>
  </div>

  <div class="links-section">
    <h2>Республиканский уровень</h2>
    <ul>
      <li><a href="https://minobr.rkomi.ru/" target="_blank" rel="noopener noreferrer">Министерство образования Республики Коми</a></li>
    </ul>
  </div>

  <div class="links-section">
    <h2>Местный (городской) уровень</h2>
    <ul>
      <li><a href="http://upro.vorkuta.ru/" target="_blank" rel="noopener noreferrer">Управление образования администрации МО ГО "Воркута"</a></li>
    </ul>
  </div>
</div>

<style>
  .links-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .accent-line {
    width: 6px;
    height: 2.5rem;
    background-color: #4A90E2;
    border-radius: 3px;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    color: #333;
  }

  .links-section {
    margin-bottom: 2rem;
  }

  h2 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #eee;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
  }

  li:before {
    content: "•";
    color: #4A90E2;
    font-size: 1.5em;
    margin-right: 0.5rem;
  }

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #4A90E2;
  }

  @media (max-width: 768px) {
    .links-container {
      padding: 1rem;
    }

    .title-container {
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    .accent-line {
      height: 2rem;
    }
  }
</style>