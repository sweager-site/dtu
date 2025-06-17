<script lang="ts">
  import { link } from 'svelte-spa-router';

  const news = [
    {
      id: '1',
      title: 'Бессмертный полк',
      date: '15 мая 2025',
      image: '/image8.jpg',
      preview: 'Активисты движения «Волонтеры Победы», Дворца творчества детей и молодежи, провели ежегодную акцию «Запиши деда в Бессмертный полк»...',
    },
    {
      id: '2',
      title: 'Кадетский Бал',
      date: '24 апреля 2025',
      image: '/image9.jpg',
      preview: 'Во Дворце творчества детей и молодежи прошел Кадетский Бал, посвящённый Году защитника Отечества и 80-летия Победы в Великой Отечественной войне. Кадеты неотъемлемая часть жизни города, активные участники акций, торжественных мероприятий, парадов и конкурсов. Без кадет не обходится ни одно важное событие в жизни города...',
    },
    {
      id: '3',
      title: 'Победа',
      date: '01 апреля 2025',
      image: '/image7.jpg',
      preview: '28 марта в г. Ухта состоялся финальный этап открытого конкурса детских инженерных команд «ӦТАРӦ-МӦДАРӦ – 2025»! Конкурс проводится с целью популяризации научно-технического творчества детей и молодежи, выявления талантливых и одаренных детей в научно-технической сфере...',
    },
  ];
</script>

<div class="news-page">
  <h1>Новости</h1>
  <div class="news-grid">
    {#each news as newsItem}
      <div class="news-card">
        <div class="news-header">
          <div class="accent-line"></div>
          <div class="header-content">
            <h3>{newsItem.title}</h3>
            <span class="news-date">{newsItem.date}</span>
          </div>
        </div>
        <div class="news-preview">
          <div class="preview-image">
            <img src={newsItem.image} alt={newsItem.title} />
          </div>
          <div class="preview-text">
            <p>{newsItem.preview}</p>
          </div>
        </div>
        <a href={`/news/${newsItem.id}`} use:link class="read-more-button">
          Подробнее
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .news-page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  .news-page h1 {
    font-size: 2em;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
  }

  .news-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
  }

  .news-card {
    background: #fff;
    border: 1px solid #EEEEEE;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .news-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .news-header {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }

  .accent-line {
    width: 4px;
    height: 24px;
    background-color: #4A90E2;
    border-radius: 2px;
    margin-top: 4px;
  }

  .header-content {
    flex: 1;
  }

  .header-content h3 {
    margin: 0;
    font-size: 1.4em;
    color: #333;
    line-height: 1.3;
  }

  .news-date {
    font-size: 0.9em;
    color: #777;
    margin-top: 4px;
    display: block;
  }

  .news-preview {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .preview-image {
    width: 200px;
    height: 150px;
    flex-shrink: 0;
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .preview-text {
    flex: 1;
  }

  .preview-text p {
    margin: 0;
    color: #555;
    line-height: 1.5;
    font-size: 0.95em;
  }

  .read-more-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4A90E2;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    align-self: flex-end;
    transition: background-color 0.2s ease;
  }

  .read-more-button:hover {
    background-color: #357ABD;
  }

  @media (max-width: 768px) {
    .news-preview {
      flex-direction: column;
    }

    .preview-image {
      width: 100%;
      height: 200px;
    }
  }
</style>