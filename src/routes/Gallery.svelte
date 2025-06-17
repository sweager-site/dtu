<script lang="ts">
  import Carousel from 'svelte-carousel';

  const galleries = [
    {
      title: 'Театральная студия',
      mainImage: '/image1.jpg',
      smallImages: ['/image2.jpg', '/image3.jpg']
    },
    {
      title: 'Театральная студия',
      mainImage: '/image4.jpg',
      smallImages: ['/image5.jpg', '/image6.jpg']
    }
  ];
</script>

<div class="gallery-container">
  <div class="title-container">
    <div class="accent-line"></div>
    <h1>Фотогалерея</h1>
  </div>

  <div class="carousel-container">
    <Carousel
      autoplay={true}
      autoplayTimeout={5000}
      dots={true}
      arrows={true}
    >
      {#each galleries as gallery}
        <div class="gallery-card">
          <h2>{gallery.title}</h2>
          <div class="images-container">
            <div class="main-image">
              <img src={gallery.mainImage} alt={gallery.title} />
            </div>
            <div class="small-images">
              {#each gallery.smallImages as image}
                <div class="small-image">
                  <img src={image} alt={gallery.title} />
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </Carousel>
  </div>
</div>

<style>
  .gallery-container {
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

  .carousel-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .gallery-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin: 10px;
  }

  h2 {
    color: #333;
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
  }

  .images-container {
    display: flex;
    gap: 1.5rem;
  }

  .main-image {
    flex: 0 0 50%;
  }

  .small-images {
    flex: 0 0 calc(50% - 1.5rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .main-image img,
  .small-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .small-image {
    height: calc((100% - 1rem) / 2);
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
    .gallery-container {
      padding: 1rem;
    }

    .title-container {
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    .accent-line {
      height: 2rem;
    }

    .images-container {
      flex-direction: column;
    }

    .main-image,
    .small-images {
      flex: 0 0 100%;
    }

    :global(.svelte-carousel-arrow) {
      width: 32px;
      height: 32px;
      font-size: 1.2rem;
    }
  }
</style>