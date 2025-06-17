<script lang="ts">
  import Carousel from 'svelte-carousel';
  import { link } from 'svelte-spa-router';

  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
  ];
  
  const newsSet1 = [
    {
      id: 1,
      title: 'Бессмертный полк',
      description: 'Активисты движения «Волонтеры Победы», Дворца творчества детей и молодежи, провели ежегодную акцию «Запиши деда в Бессмертный полк».',
      date: '15 мая',
    },
    {
      id: 2,
      title: 'Кадетский Бал',
      description: 'Во Дворце творчества детей и молодежи прошел Кадетский Бал, посвящённый Году защитника Отечества и 80-летия Победы в Великой Отечественной войне.',
      date: '24 апреля',
    },
    {
      id: 3,
      title: 'Победа!',
      description: '28 марта в г. Ухта состоялся финальный этап открытого конкурса детских инженерных команд «ӦТАРӦ-МӦДАРӦ – 2025»! Конкурс проводится с целью популяризации научно-технического творчества детей и молодежи, выявления талантливых и одаренных детей в научно-технической сфере.',
      date: '01 апреля',
    },
  ];

  const quickLinks = [
    { title: 'Фотогалерея', href: '/gallery' },
    { title: 'История ДТЮ', href: '/history-dty' },
    { title: 'Контакты', href: '/contacts' },
    { title: 'Полезные ссылки', href: '/links' },
    { title: 'Фотографии ДТЮ', href: '/gallery-dty' },
    { title: 'Расписание занятий', href: 'https://dtdm-vorkuta.ru/images/info/raspisanie_zanyatiy.pdf' },
  ];

</script>

<div class="hero-section">
  <div class="carousel-container main-carousel-container">
    <Carousel autoplay={true} autoplayTimeout={3000} dots={true} arrows={true}>
      {#each images as image, i}
        <div class="carousel-slide">
          <img src={image} alt={`Slide ${i + 1}`} />
        </div>
      {/each}
    </Carousel>
  </div>
  <div class="news-section-alongside">
    <h2 class="news-section-title">Последние новости</h2>
    <div class="news-grid-container">
      {#each newsSet1.slice(0, 4) as newsItem} 
        <a href="/news" use:link class="news-card">
          <h3>{newsItem.title}</h3>
          <p class="news-description">{newsItem.description}</p>
          <p class="news-date">{newsItem.date}</p>
        </a>
      {/each}
    </div>
  </div>
</div>


<div class="quick-links-section">
  <div class="quick-links-grid">
    {#each quickLinks as item}
      <a href={item.href} use:link class="quick-link-card">
        <span>{item.title}</span>
      </a>
    {/each}
  </div>
</div>

<style>
  .hero-section {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    max-width: 1440px;
    margin: 0 auto;
  }

  .main-carousel-container {
    width: 60%;
    height: 700px;
    overflow: hidden;
  }

  .carousel-slide {
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :global(.svelte-carousel-dots button) {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }
  :global(.svelte-carousel-dots button.selected) {
    background-color: rgba(0, 0, 0, 0.7) !important;
  }
  :global(.svelte-carousel-arrow) {
    color: white !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(.svelte-carousel-arrow:hover) {
    background-color: rgba(0, 0, 0, 0.7) !important;
  }

  .news-section-alongside {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }

  .news-section-title {
    font-size: 2em;
    color: #333;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
  }

  .news-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
    flex-grow: 1;
  }

  .news-card {
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 1 / 0.8;
    border: 1px solid #EEEEEE;
    border-radius: 8px;
    padding: 15px;
    margin: 0px;
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .news-card h3 {
    font-size: 1.4em;
    color: #333;
    margin-top: 0;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news-card .news-description {
    font-size: 1em;
    color: #555;
    flex-grow: 1;
    margin-bottom: 15px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news-card .news-date {
    font-size: 0.9em;
    color: #777;
    text-align: right;
  }
  
  .quick-links-section {
    padding: 40px 20px;
    display: flex;
    justify-content: center;
  }

  .quick-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1440px;
  }

  .quick-link-card {
    aspect-ratio: 1 / 1;
    border: 1px solid #EEEEEE;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    font-size: 1.1em;
    color: #333;
    font-weight: 500;
  }

  .quick-link-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    border-color: #DDDDDD;
  }
</style>


