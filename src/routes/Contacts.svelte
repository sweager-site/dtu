<div class="contacts-page">
  <div class="header-with-line">
    <div class="accent-line"></div>
    <h1>Контакты</h1>
  </div>

  <div class="contacts-table-container">
    <table class="contacts-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>ФИО</th>
          <th>Должность</th>
          <th>Рабочий телефон</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="name-highlight">Прокопчик Елена Николаевна</td>
          <td>Директор МУДО «ДТДиМ» г.Воркуты </td>
          <td>(82151) 5-77-18</td>
        </tr>
        <tr>
          <td>2</td>
          <td class="name-highlight">Жилионис Ольга Николаевна</td>
          <td>Заместитель директора</td>
          <td>(82151) 3-68-03</td>
        </tr>
        <tr>
          <td>3</td>
          <td class="name-highlight">	Шатилова Мария Олеговна</td>
          <td>Заведующий отделом плавания/Заведующий отделом спорта </td>
          <td>(82151) 3-61-03</td>
        </tr>
        <tr>
          <td>4</td>
          <td class="name-highlight">Панина Светлана Александровна</td>
          <td>Старший Методист</td>
          <td>(82151) 3-32-16 </td>
        </tr>
        <tr class="service-staff">
          <td>5</td>
          <td>Приемная</td>
          <td>-</td>
          <td>(82151) 3-68-15</td>
        </tr>
        <tr class="service-staff">
          <td>6</td>
          <td>Вахтер</td>
          <td>-</td>
          <td>+7 (999) 123-45-72</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
  .contacts-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 80px;
  }

  .header-with-line {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
  }

  .accent-line {
    width: 4px;
    height: 32px;
    background-color: #4A90E2;
    border-radius: 2px;
  }

  .header-with-line h1 {
    margin: 0;
    font-size: 2em;
    color: #333;
  }

  .contacts-table-container {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    overflow-x: auto;
  }

  .contacts-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  .contacts-table th {
    background-color: #f8f9fa;
    padding: 15px;
    font-weight: 600;
    color: #333;
    border-bottom: 2px solid #dee2e6;
  }

  .contacts-table td {
    padding: 15px;
    border-bottom: 1px solid #dee2e6;
    color: #444;
  }

  .contacts-table tr:last-child td {
    border-bottom: none;
  }

  .name-highlight {
    color: #4A90E2;
    font-weight: 500;
  }

  .service-staff td {
    color: #666;
  }

  @media (max-width: 768px) {
    .contacts-table-container {
      padding: 10px;
    }

    .contacts-table th,
    .contacts-table td {
      padding: 10px;
      font-size: 0.9em;
    }

    .header-with-line h1 {
      font-size: 1.8em;
    }
  }
</style>