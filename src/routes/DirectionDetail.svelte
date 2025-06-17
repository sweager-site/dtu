<script lang="ts">
  import { push } from "svelte-spa-router";

  export let params = { id: "" };

  const allDirections = [
    {
      id: "1",
      title: "Изобразительное искусство",
      description:
        "Наша студия изобразительного искусства предлагает комплексное обучение различным техникам рисования и живописи. Опытные преподаватели помогут развить творческие способности, освоить работу с разными материалами и найти собственный художественный стиль. Программа включает занятия по рисунку, живописи, композиции и истории искусств. Мы работаем с учениками всех возрастов и уровней подготовки, создавая индивидуальный подход к каждому.",
      image: "/image10.jpg",
    },
    {
      id: "2",
      title: "Хореография",
      description:
        "В нашей хореографической студии вы сможете освоить различные танцевальные направления под руководством профессиональных педагогов. Мы предлагаем занятия классическим, современным и народным танцем. Наши ученики регулярно участвуют в конкурсах и фестивалях, выступают на городских мероприятиях. Занятия хореографией развивают пластику, координацию, музыкальный слух и чувство ритма.",
      image: "/image11.jpg",
    },
    {
      id: "3",
      title: "Вокальное мастерство",
      description:
        "Студия вокала предлагает индивидуальные и групповые занятия по развитию голоса и музыкального слуха. Наши педагоги используют современные методики обучения вокалу, помогают развить дыхание, расширить диапазон и улучшить тембр голоса. В программу входит работа над репертуаром, участие в концертах и конкурсах. Мы работаем с разными музыкальными стилями и направлениями.",
      image: "/imagee12.jpg",
    },
    {
      id: "4",
      title: "Театральная студия",
      description:
        "Театральная студия - это место, где каждый может раскрыть свой творческий потенциал через актёрское мастерство. Наши занятия включают работу над сценической речью, пластикой, импровизацией и созданием образов. Ученики участвуют в постановках спектаклей, творческих вечерах и театральных фестивалях. Театральное искусство помогает развить уверенность в себе, креативность и навыки публичных выступлений.",
      image: "/image13.jpg",
    },
  ];

  $: direction = allDirections.find((d) => d.id === params.id) || null;

  function goBack() {
    push("/directions");
  }

  function handleSignUp() {
    alert(`Вы записались на мероприятие`);
  }
</script>

<div class="direction-detail-page">
  {#if direction}
    <div class="direction-container">
      <div class="direction-image-wrapper">
        <img
          src={direction.image}
          alt={direction.title}
          class="direction-image-detail"
        />
      </div>
      <div class="direction-content">
        <h1>{direction.title}</h1>
        <p class="direction-description">{direction.description}</p>
        <div class="button-group">
          <button on:click={goBack} class="back-button">Назад</button>
          <button on:click={handleSignUp} class="signup-button"
            >Записаться</button
          >
        </div>
      </div>
    </div>
  {:else}
    <div class="error-container">
      <h1>Направление не найдено</h1>
      <p>К сожалению, мы не смогли найти информацию по вашему запросу.</p>
      <button on:click={goBack} class="back-button">Вернуться к списку</button>
    </div>
  {/if}
</div>

<style>
  .direction-detail-page {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 60px - 50px);
  }

  .direction-container {
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

  .direction-image-wrapper {
    flex: 0 0 45%;
    min-height: 600px;
    position: relative;
  }

  .direction-image-detail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
  }

  .direction-content {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .direction-content h1 {
    font-size: 2.2em;
    color: #333;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .direction-description {
    font-size: 1.1em;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
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
    .direction-container {
      flex-direction: column;
      margin-top: 10px;
    }

    .direction-image-wrapper {
      flex-basis: auto;
      width: 100%;
      height: 250px;
      min-height: auto;
    }

    .direction-image-detail {
      border-radius: 11px 11px 0 0;
    }

    .direction-content {
      padding: 20px;
    }

    .direction-content h1 {
      font-size: 1.8em;
    }

    .direction-description {
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
