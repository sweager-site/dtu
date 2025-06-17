<script lang="ts">
  import Router from 'svelte-spa-router';
  import Navbar from './lib/Navbar.svelte';
  import Footer from './lib/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Events from './routes/Events.svelte';
  import News from './routes/News.svelte';
  import Directions from './routes/Directions.svelte';
  import Gallery from './routes/Gallery.svelte';
  import Contacts from './routes/Contacts.svelte';
  import Links from './routes/Links.svelte';
  import EventDetail from './routes/EventDetail.svelte';

  import NewsDetail from './routes/NewsDetail.svelte';
  import DirectionDetail from './routes/DirectionDetail.svelte';
  import GalleryDty from './routes/GalleryDty.svelte';
  import HistoryDty from './routes/HistoryDty.svelte';

  const routes = {
    '/': Home,
    '/events': Events,
    '/news': News,
    '/directions': Directions,
    '/gallery': Gallery,
    '/contacts': Contacts,
    '/links': Links,
    '/event/:id': EventDetail,
    '/news/:id': NewsDetail,
    '/direction/:id': DirectionDetail,
    '/gallery-dty': GalleryDty,
    '/history-dty': HistoryDty,
    '*': Home,
  };
</script>

<div class="app-layout">
  <Navbar />

  <main>
    <Router {routes} />
  </main>

  <Footer />
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    padding-top: 60px;
    flex-grow: 1;
  }
</style>
