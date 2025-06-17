<script lang="ts">
  import { location } from 'svelte-spa-router';
  import { push } from 'svelte-spa-router';

  const newsData = [
    {
      id: '1',
      title: 'Бессмертный полк',
      date: '15 мая 2025',
      image: '/image8.jpg',
      content: 'Активисты движения «Волонтеры Победы», Дворца творчества детей и молодежи, провели ежегодную акцию «Запиши деда в Бессмертный полк». Активисты вышли на улицы города и обратились к горожанам с предложением принять участие в праздничном шествии «Бессмертного полка» 9 мая и почтить память своего родственника - ветерана армии и флота, партизана, труженика тыла, узника концлагеря, блокадника, ребенка войны. Также все желающие могли принести фото ветерана для его реставрации. Бессмертный полк: наш долг - сохранить и защитить память о наших героях!',
    },
    {
      id: '2',
      title: 'Кадетский Бал',
      date: '24 апреля 2025',
      image: '/image9.jpg',
      content: 'Во Дворце творчества детей и молодежи прошел Кадетский Бал, посвящённый Году защитника Отечества и 80-летия Победы в Великой Отечественной войне. Кадеты неотъемлемая часть жизни города, активные участники акций, торжественных мероприятий, парадов и конкурсов. Без кадет не обходится ни одно важное событие в жизни города. В 2024 - 2025 учебном году кадетские классы открыты в 11 образовательных учреждениях. В 41 кадетских классах обучается 820 кадет. В торжественной обстановке были подведены итоги городских конкурсов в рамках проведения Месячника гражданско-патриотического воспитания 2025 года и муниципального конкурса «Лучший кадет 2025». Ребята очередной раз доказали, что Защита Отечества – священный долг гражданина России, и готовиться к выполнению этого долга нужно со школьной скамьи. На Балу прозвучали имена Героев Республики Коми, тех, кто в разные времена совершили подвиг во имя страны и во имя мира на земле. Кто является примером мужества и самоотверженности для подрастающего поколения.',
    },
    {
      id: '3',
      title: 'Победа',
      date: '01 апреля 2025',
      image: '/image7.jpg',
      content: '28 марта в г. Ухта состоялся финальный этап открытого конкурса детских инженерных команд «ӦТАРӦ-МӦДАРӦ – 2025»! Конкурс проводится с целью популяризации научно-технического творчества детей и молодежи, выявления талантливых и одаренных детей в научно-технической сфере. 10 сильнейших команд Республики Коми прошли сложные и интересные задания техноквеста, продемонстрировали свои инженерные способности и творческий подход. Финальный этап включал в себя умение работать с микроконтроллером ESP 8266, пайку, электросхемотехнику, сборку электротехнического устройства, управление робототехническим устройством, создание видеоролика на приложении CapCut, моделирование в программе Blender.Учащиеся из объединения "Робототехника" Дворца творчества детей и молодежи заняли почётное 3-е место! Победа в конкурсе - это результат упорного труда и веры в себя. Поздравляем всех ребят и педагога Юрия Викторовича, желаем дальнейших успехов! Пусть эта победа станет началом большого пути к новым вершинам и достижениям. Вперед к новым победам!',
    },
  ];

  $: params = $location.split('/').pop();
  $: newsItem = newsData.find(item => item.id === params);

  function goBack() {
    push('/news');
  }
</script>

<div class="news-detail-page">
  {#if newsItem}
    <div class="news-content">
      <button class="back-button" on:click={goBack}>← Назад к новостям</button>
      
      <div class="news-header">
        <h1>{newsItem.title}</h1>
        <span class="news-date">{newsItem.date}</span>
      </div>

      <div class="news-image">
        <img src={newsItem.image} alt={newsItem.title} />
      </div>

      <div class="news-text">
        <p>{newsItem.content}</p>
      </div>
    </div>
  {:else}
    <div class="error-container">
      <h2>Новость не найдена</h2>
      <p>Запрашиваемая новость не существует или была удалена.</p>
      <button class="back-button" on:click={goBack}>← Вернуться к списку новостей</button>
    </div>
  {/if}
</div>

<style>
  .news-detail-page {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 80px;
  }

  .news-content {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .back-button {
    background: none;
    border: none;
    color: #4A90E2;
    cursor: pointer;
    font-size: 1em;
    padding: 0;
    margin-bottom: 20px;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s ease;
  }

  .back-button:hover {
    color: #357ABD;
  }

  .news-header {
    margin-bottom: 20px;
  }

  .news-header h1 {
    margin: 0;
    font-size: 2em;
    color: #333;
    line-height: 1.3;
  }

  .news-date {
    display: block;
    color: #777;
    margin-top: 10px;
    font-size: 0.9em;
  }

  .news-image {
    margin-bottom: 30px;
    border-radius: 12px;
    overflow: hidden;
  }

  .news-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  .news-text {
    line-height: 1.6;
    color: #444;
  }

  .news-text p {
    margin: 0;
    font-size: 1.1em;
  }

  .error-container {
    text-align: center;
    padding: 40px 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .error-container h2 {
    color: #333;
    margin: 0 0 10px 0;
  }

  .error-container p {
    color: #666;
    margin: 0 0 20px 0;
  }

  @media (max-width: 768px) {
    .news-content {
      padding: 20px;
    }

    .news-header h1 {
      font-size: 1.8em;
    }

    .news-text p {
      font-size: 1em;
    }
  }
</style>