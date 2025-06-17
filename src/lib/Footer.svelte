<footer>
  <div class="footer-content">
    <div class="contact-info">
      <p><strong>Адрес:</strong> ул. Ленина, 47, Воркута, Респ. Коми, 169900</p>
      <p><strong>Телефон:</strong> <a href="tel:88215157718">8 (821) 515-77-18</a></p>
      <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
    </div>
    <div class="copyright-info">
      <span>87721565</span>
      <p>
        © {new Date().getFullYear()} Муниципальное учреждение дополнительного образования
        «Дворец творчества детей и молодежи» г. Воркуты. Все права защищены.
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 1.5rem 1rem;
    border-top: 1px solid #dee2e6;
    color: #495057;
    font-size: 0.9rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #f8f9fa;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: 0 auto;
  }

  .contact-info {
    text-align: left;
    margin-bottom: 1rem;
  }

  .contact-info p {
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }

  .contact-info strong {
    color: #343a40;
  }

  .contact-info a {
    color: #007bff;
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  .copyright-info {
    text-align: right;
    margin-bottom: 1rem;
  }

  .copyright-info p {
    margin: 0;
  }

  .copyright-info span {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: #6c757d;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }
    .contact-info,
    .copyright-info {
      text-align: center;
      width: 100%;
      margin-bottom: 1.5rem;
    }
    .copyright-info {
      margin-bottom: 0;
    }
  }
</style>
