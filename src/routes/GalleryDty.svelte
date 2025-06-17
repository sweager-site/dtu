<script lang="ts">
  import Carousel from 'svelte-carousel';
  import { link } from 'svelte-spa-router';

  const images = [
    '/image21.jpg',
    '/image22.jpg',
    '/image23.jpg',
    '/image24.jpg',
    '/image25.jpg',
    '/image26.jpg',
  ];
</script>

<div class="container">
  <div class="header">
    <div class="title-container">
      <div class="accent-line"></div>
      <h1>Фотогалерея ДТЮ</h1>
    </div>
    <a href="/" use:link class="back-link">Вернуться на главную</a>
  </div>

  <div class="carousel-container">
    <Carousel
      autoplay={true}
      autoplayTimeout={5000}
      dots={true}
      arrows={true}
    >
      {#each images as image, i}
        <div class="carousel-slide">
          <img src={image} alt={`Слайд ${i + 1}`} />
        </div>
      {/each}
    </Carousel>
  </div>
</div>

<style>
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 32rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
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

  .back-link {
    color: #666;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .back-link:hover {
    color: #4A90E2;
  }

  .carousel-container {
    width: 100%;
    max-width: 1440px;
    height: 400px;
    margin: 0 auto;
  }

  .carousel-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
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

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    .accent-line {
      height: 2rem;
    }

    .carousel-container {
      height: 400px;
    }

    :global(.svelte-carousel-arrow) {
      width: 32px;
      height: 32px;
      font-size: 1.2rem;
    }
  }
</style>