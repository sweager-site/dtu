<script lang="ts">
  import { push } from 'svelte-spa-router';

  export let params = {id: ''};

  const allEvents = [
    {
      id: '1',
      title: 'Лето труда и отдыха-2025',
      description: '2 июня во Дворце творчества детей и молодежи началась первая смена трудовых и оздоровительных лагерей. Представители администрации города и других организаций поздравили ребят с началом лета. Наталья Герасименко из Центра занятости отметила, что рада видеть столько юных воркутинцев, желающих сделать город чище. Павел Вологжанинов из ОМВД выразил надежду на соблюдение законодательства в лагерях. После напутственных слов ребята представили свои отряды и девизы, участвуя в играх, конкурсах и спортивной разминке. Праздничное настроение создали творческие коллективы Дворца.',
      image: '/image14.jpg',
    },
    {
      id: '2',
      title: 'Путь Победы',
      description: 'День Победы – это не просто дата, а событие, объединяющее поколения и напоминающее о подвиге предков. В этом году праздник стал особенно трогательным благодаря школьникам и творческим коллективам. 7 мая во Дворце творчества детей и молодежи прошел концерт «Путь Победы», посвященный 80-й годовщине победы в Великой Отечественной войне. Звучали песни военных лет, вызывая воспоминания о переживаниях бабушек и дедушек. Ребята также исполнили сценки, основанные на реальных событиях войны, что сделало впечатления более живыми. Память о героях почтили минутой молчания. 9 мая останется днем памяти и благодарности всем, кто отдал жизнь за мирное будущее.',
      image: '/image15.jpg',
    },
    {
      id: '3',
      title: 'Театральный батл «АртиШок» 🎭',
      description: '28 апреля в Воркутинском Драматическом театре им. Б.А. Мордвинова прошел театральный батл «АртиШок», в котором участвовали учащиеся театр-студии «Веселый ветер» и студия «Театр Дом». Цель встречи – создание творческого пространства для обмена опытом и дружбы между коллективами. В течение почти двух с половиной часов ребята соревновались в артистичности и импровизации в пяти раундах: предметном, немом, безбуквенном, случайном и скульптурном. Команды блестяще справились с заданиями, получив восторженные отзывы жюри и зрителей. Подготовка к батлу длилась месяц, включала мастер-классы и тренинги по актерскому мастерству. Этот опыт поможет участникам «Веселого ветра» развиваться в театральном ремесле. Особая благодарность Оксане Геннадьевне Ковалевой за организацию мероприятия и возможность выступить на сцене.',
      image: '/image16.jpg',
    },
    {
      id: '4',
      title: '«Достойной работе — безопасный труд»',
      description: 'Творческие коллективы Дворца творчества детей и молодежи активно участвуют в городских мероприятиях. ✅ 23 апреля во Дворце наградили победителей конкурса «Достойной работе — безопасный труд», организованного ООО «Газпром трансгаз Ухта» и другими. Творческие коллективы, такие как хореографическая студия «Феерия», школа танца «Радуга», студия «Сверхнова» и эстрадный вокал «Стар», стали главными украшениями мероприятия. ✅ 25 апреля студия эстрадного вокала «Твой голос» и ансамбль «Камелия» выступили на закрытии фестиваля шахтерских профессий «Построй свое будущее с ВоркутаУголь». ⭐️ Каждый номер был исполнен с артистичностью и профессионализмом, демонстрируя высокий уровень подготовки.',
      image: '/image17.jpg',
    }
  ];

  $: event = allEvents.find(e => e.id === params.id) || null;

  function handleSignUp() {
    alert(`Вы записались на мероприятие`);
  }

  function goBack() {
    push('/events');
  }
</script>

<div class="event-detail-page">
  {#if event}
    <div class="event-container">
      <div class="event-image-wrapper">
        <img src={event.image} alt={event.title} class="event-image-detail" />
      </div>
      <div class="event-content">
        <h1>{event.title}</h1>
        <p class="event-description">{event.description}</p>
        <div class="button-group">
          <button on:click={goBack} class="back-button">Назад</button>
          <button on:click={handleSignUp} class="signup-button">Записаться</button>
        </div>
      </div>
    </div>
  {:else}
    <div class="error-container">
      <h1>Мероприятие не найдено</h1>
      <p>К сожалению, мы не смогли найти информацию по вашему запросу.</p>
      <button on:click={goBack} class="back-button">Вернуться к списку</button>
    </div>
  {/if}
</div>

<style>
  .event-detail-page {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 60px - 50px);
  }

  .event-container {
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1440px;
    margin-top: 20px;
    overflow: hidden;
  }

  .error-container {
    text-align: center;
    padding: 40px;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  .event-image-wrapper {
    flex: 0 0 45%;
    min-height: 600px;
    position: relative;
  }

  .event-image-detail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
  }

  .event-content {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .event-content h1 {
    font-size: 2.2em;
    color: #333;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .event-description {
    font-size: 1.1em;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .signup-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .signup-button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .event-container {
      flex-direction: column;
      margin-top: 10px;
    }

    .event-image-wrapper {
      flex-basis: auto;
      width: 100%;
      height: 250px;
      min-height: auto;
    }

    .event-image-detail {
      border-radius: 11px 11px 0 0;
    }

    .event-content {
      padding: 20px;
    }

    .event-content h1 {
      font-size: 1.8em;
    }

    .event-description {
      font-size: 1em;
    }
  }

  .button-group {
    display: flex;
    gap: 15px;
    align-items: center;
    align-self: flex-end;
  }

  .back-button {
    background-color: #6c757d;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .back-button:hover {
    background-color: #5a6268;
  }
</style>