<script lang="ts">
  import { link } from 'svelte-spa-router';

  const directions = [
    {
      id: '1',
      title: 'Изобразительное искусство',
      description: 'Развитие творческих способностей через рисование и живопись',
      image: '/image10.jpg',
    },
    {
      id: '2',
      title: 'Хореография',
      description: 'Обучение танцевальному искусству разных направлений',
      image: '/image11.jpg',
    },
    {
      id: '3',
      title: 'Вокальное мастерство',
      description: 'Развитие голоса и музыкального слуха',
      image: '/imagee12.jpg',
    },
    {
      id: '4',
      title: 'Театральная студия',
      description: 'Актёрское мастерство и сценическая речь',
      image: '/image13.jpg',
    },
  ];
</script>

<div class="directions-page">
  <h1>Наши направления</h1>
  <div class="directions-grid">
    {#each directions as direction}
      <div class="direction-card">
        <div class="direction-image-container">
          <img src={direction.image} alt={direction.title} class="direction-image" />
        </div>
        <div class="direction-info">
          <h3>{direction.title}</h3>
          <p class="direction-description">{direction.description}</p>
          <a href={`/direction/${direction.id}`} use:link class="learn-more-button">
            Узнать больше
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .directions-page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  .directions-page h1 {
    font-size: 2em;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
  }

  .directions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1440px;
  }

  .direction-card {
    border: 1px solid #EEEEEE;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .direction-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    border-color: #DDDDDD;
  }

  .direction-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .direction-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
  }

  .direction-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .direction-info h3 {
    font-size: 1.3em;
    color: #333;
    margin: 0 0 10px 0;
    line-height: 1.3;
  }

  .direction-description {
    font-size: 0.95em;
    color: #666;
    margin: 0 0 20px 0;
    line-height: 1.4;
    flex-grow: 1;
  }

  .learn-more-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4A90E2;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    text-align: center;
    transition: background-color 0.2s ease;
  }

  .learn-more-button:hover {
    background-color: #357ABD;
  }

  @media (max-width: 768px) {
    .directions-grid {
      grid-template-columns: 1fr;
    }

    .direction-info {
      padding: 15px;
    }

    .direction-info h3 {
      font-size: 1.2em;
    }
  }
</style>