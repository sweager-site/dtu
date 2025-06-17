<script lang="ts">
  import { link } from 'svelte-spa-router';

  const events = [
    {
      id: '1',
      title: 'Лето труда и отдыха-2025',
      date: '2 июня, 17:00',
      image: '/image14.jpg'
    },
    {
      id: '2',
      title: 'Путь Победы',
      date: '8 мая, 19:00',
      image: '/image15.jpg',
    },
    {
      id: '3',
      title: 'Театральный батл «АртиШок» 🎭',
      date: '1 мая, 12:00',
      image: '/image16.jpg',
    },
    {
      id: '4',
      title: '«Достойной работе — безопасный труд»',
      date: '23 апреля, 13:00',
      image: '/image17.jpg',
    },
    {
      id: '5',
      title: 'Год защитника Отечества и в связи с 80-летием Победы',
      date: '17 апреля, 14:00',
      image: '/image18.jpg',
    },
    {
      id: '6',
      title: '«Твой голос»',
      date: '16 апреля, 18:00',
      image: '/image19.jpg',
    },
    {
      id: '7',
      title: '80 - летия Великой Победы',
      date: '13 апреля, 10:00',
      image: '/image20.jpg',
    }
  ];
</script>

<div class="events-page">
  <h1>Мероприятия</h1>
  <div class="events-grid">
    {#each events as eventItem}
      <a href={`/event/${eventItem.id}`} use:link class="event-card">
        <div class="event-image-container">
          <img src={eventItem.image} alt={eventItem.title} class="event-image" />
        </div>
        <div class="event-info">
          <h3>{eventItem.title}</h3>
          <p class="event-date">{eventItem.date}</p>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .events-page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  .events-page h1 {
    font-size: 2em;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
  }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1440px;
  }

  .event-card {
    border: 1px solid #EEEEEE;
    border-radius: 12px;
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    border-color: #DDDDDD;
  }

  .event-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .event-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
  }

  .event-info {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  .event-card h3 {
    font-size: 1.3em;
    color: #333;
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .event-card .event-date {
    font-size: 0.9em;
    color: #777;
    margin-top: auto;
  }
</style>