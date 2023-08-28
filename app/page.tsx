"use client";

import React, { useState } from "react";

import Header from "@/components/Header";
import About from "@/sections/About";
import SymbiosisTech from "@/sections/SymbiosisTech";
import HowItWork from "@/sections/HowItWork";
import RelevantToCompany from "@/sections/RelevantToCompany";
import Peculiarities from "@/sections/Peculiarities";
import Benefits from "@/sections/Benefits";
import Advantages from "@/sections/Advantages";
import Implementation from "@/sections/Implementation";
import ComparisonCRM from "@/sections/ComparisonCRM";
import SystemSCM from "@/sections/SystemSCM";
import SubmitYourApp from "@/sections/SubmitYourApp";
import Footer from "@/components/Footer";

// scroll logic;
import ContentLayout from "@/components/ContentLayout";

// header
import imgLogo from "@/images/recontera.svg";
import imgBurger from "@/images/burger.svg";

// symbiosis tech
import figure1 from "@/images/figure1.svg";
import figure2 from "@/images/figure2.svg";
import figure3 from "@/images/figure3.svg";
import figure4 from "@/images/figure4.svg";
import figure5 from "@/images/figure5.svg";

// how it work
import imgB2C from "@/images/b2c.svg";
import imgB2B from "@/images/b2b.svg";
import imgBackgroundRelevant from "@/images/background-2.svg";

// peculiarities
import imgBackgroundPeculiarities from "@/images/background-3.svg";

// benefits
import imgTechnicalSupport from "@/images/technicalSupport.svg";
import imgTactic from "@/images/tactic.svg";
import imgTarget from "@/images/target.svg";

// advantages
import imgCardAdvantages from "@/images/card1.jpg";

// implementation
import imgMartinexLogo from "@/images/martinexLogo.svg";

// systemSCM
import imgSettings from "@/images/settings.svg";
import imgChart from "@/images/chart.svg";
import imgFlash from "@/images/flash.svg";
import imgTrophy from "@/images/trophy.svg";

// footer
import imgWhatsapp from "@/images/whatsapp.svg";
import imgTelegram from "@/images/telegram.svg";

export default function Home() {
  const [horizontalSliderRef, setHorizontalSliderRef] = useState(null);

  const handleHorizontalSliderData = (value: any) => {
    setHorizontalSliderRef(value);
  };

  return (
    <>
      <Header data={data.global.header} phone={data.global.phone} />
      <ContentLayout horizontalSliderData={horizontalSliderRef}>
        <About data={data.about} />
        <SymbiosisTech
          data={data.symbiosisTech}
          sliderData={handleHorizontalSliderData}
        />
        <HowItWork data={data.howItWork} />
        <RelevantToCompany data={data.relevantToCompany} />
        <Peculiarities data={data.peculiarities} />
        <Benefits data={data.benefits} />
        <Advantages data={data.advantages} />
        <Implementation data={data.implementation} />
        <ComparisonCRM data={data.comparisonCRM} />
        <SystemSCM data={data.systemSCM} />
        <SubmitYourApp data={data.submitYourApp} />
      </ContentLayout>
      <Footer
        data={data.global.footer}
        phone={data.global.phone}
        email={data.global.email}
      />
    </>
  );
}

const data = {
  global: {
    phone: "8 800 111-00-09",
    email: "info@recontera.com",
    header: {
      logo: imgLogo,
      burger: imgBurger,
      menu: [
        { name: "Преимущества", link: "/#advantages" },
        { name: "Результат", link: "/#result" },
        { name: "Контакты", link: "/#contacts" },
      ],
    },
    footer: {
      logo: imgLogo,
      whatsapp: {
        icon: imgWhatsapp,
        link: "/",
      },
      telegram: {
        icon: imgTelegram,
        link: "/",
      },
      menu: [
        {
          links: [
            { title: "Преимущества панели", url: "/" },
            { title: "Результат работы", url: "/" },
            { title: "Примеры внедрения", url: "/" },
          ],
        },
        {
          links: [
            { title: "Сравнение с обычными CRM", url: "/" },
            { title: "Система контурного управления продажами", url: "/" },
            { title: "Контакты", url: "/" },
          ],
        },
      ],
      privacyPolicy: {
        text: "Политика конфиденциальности",
        link: "/",
      },
    },
  },
  about: {
    title: "Реконтера",
    subtitle: "3x3 панель",
    text: (
      <span>
        {" "}
        Уникальная{" "}
        <span className="text-primary-orange">
          информационно-аналитическая
        </span>{" "}
        система для контроля эффективности многоканального продвижения по
        технологии «Контурных продаж»
      </span>
    ),
  },
  symbiosisTech: {
    title: (
      <span>
        {" "}
        Симбиоз <span className="text-primary-orange">маркетинговых</span>{" "}
        <br />и <span className="text-light-cyan">информационных</span>{" "}
        технологий
      </span>
    ),
    cardTech: [
      {
        index: "0",
        number: "I",
        icon: figure1,
        text: (
          <span>
            Панель «РЕКОНТЕРА» как{" "}
            <span className="text-primary-orange">
              маркетинговая технология
            </span>{" "}
            — это специальный инструмент ПОЛНОГО контроля эффективности
            многоканальных систем продвижения: всех ТРЕХ каналов продвижения и
            всех ТРЕХ направлений промо-активности.
          </span>
        ),
      },
      {
        index: "1",
        number: "I",
        icon: figure2,
        text: (
          <span>
            Панель отслеживает показатели эффективности подразделений
            в соответствии с современной технологией управления продвижением —
            <br />
            <br />
            <span className="text-primary-orange">
              Системе Контурного Управления Продажами (СКУП)
            </span>{" "}
          </span>
        ),
      },
      {
        index: "2",
        number: "II",
        icon: figure3,
        text: (
          <span>
            Панель «РЕКОНТЕРА» как{" "}
            <span className="text-primary-orange">IT-технология</span> — это
            комплекс алгоритмов, которые управляют работой платформы, состоящей
            из CRM, 1С и отчетной системы.
            <br />
            <br />
            Платформа особым образом обрабатывает потоки обращений клиентов для
            формирования требуемых показателей эффективности.
          </span>
        ),
      },
      {
        index: "3",
        number: "II",
        icon: figure4,
        text: (
          <span>
            На основе полученных данных формируются аналитические отчеты
            с бесценной информацией о работе системы продвижения.
            <br />
            <br />
            Платформа работает автономно.
          </span>
        ),
      },
      {
        index: "4",
        number: "III",
        icon: figure5,
        text: (
          <span>
            Платформу можно создавать из программ разных производителей
            и настраивать под особенности каждой конкретной компании.
          </span>
        ),
      },
    ],
  },
  howItWork: {
    title: "Как работает панель?",
    text: (
      <span>
        Панель оцифровывает работу системы продвижения компании, формирует
        показатели эффективности работы каждого промо-канала и направления
        промо-активности на генерирующих и конвертирующих участках и формирует
        специальные отчеты.
        <br />
        <br />
        Панель работает автоматически, исключая влияние человеческого фактора.
      </span>
    ),
  },
  relevantToCompany: {
    title: "Каким компаниям актуально?",
    text: (
      <span>
        3×3 Панель «РЕКОНТЕРА» — создана специально для компаний B2C-сектора
        услуг и В2В-сектора, которые используют сразу несколько каналов
        продвижения в своем промо-комплексе: онлайн/офлайн рекламу, личные
        продажи и мероприятия.
      </span>
    ),
    imgB2C: imgB2C,
    imgB2B: imgB2B,
    imgBackground: imgBackgroundRelevant,
  },
  peculiarities: {
    title: "Особенности панели",
    textFirst: (
      <span>
        «РЕКОНТЕРА» обеспечивает контроль эффективности не только рекламы, а
        также, в первую очередь, личных продаж и мероприятий в каждом
        из промо-направлений: стимулирование, развитие и привлечение клиентов.
        Кроме того, панель измеряет «чистую» эффективность каналов
        и направлений.
      </span>
    ),
    textSecond: (
      <span>
        На сегодняшний день «РЕКОНТЕРА» — единственная специализированная панель
        для контроля эффективности многоканального промо-комплекса
      </span>
    ),
    background: imgBackgroundPeculiarities,
  },
  benefits: {
    title: "Выгоды от внедрения панели",
    text: (
      <span>
        {" "}
        Данные, предоставляемые Панелью, позволяют выявить все недостатки
        существующей системы продвижения компании и подсказывают эффективные
        решения по ее развитию на всех уровнях управления:
      </span>
    ),
    cardBenefits: [
      { icon: imgTechnicalSupport, text: "Оперативном" },
      { icon: imgTactic, text: "Тактическом" },
      { icon: imgTarget, text: "Стратегическом" },
    ],
  },
  advantages: {
    title: "Преимущества панели",
    cardAdvantages: [
      {
        number: "01",
        icon: imgCardAdvantages,
        textFirst: (
          <span>
            3x3 Панель «РЕКОНТЕРА» автоматически определяет эффективность
            каждого
            <br />
            из ТРЕХ генерирующих промо-каналов!
          </span>
        ),
        textSecond: (
          <span>
            Этим «РЕКОНТЕРА» отличается от существующих решений сквозной
            аналитики, которые отслеживают эффективность только одного
            промо-канала — РЕКЛАМЫ
          </span>
        ),
        button: {
          text: "Подробнее",
        },
      },
    ],
  },
  implementation: {
    title: "Примеры внедрения панели",
    textFirst: (
      <span>
        {" "}
        На данный момент Панель внедрена в нескольких крупных В2В и В2С компаний
        из разных отраслей. По договоренности с компаниями мы можем их называть
        только с разрешения.
      </span>
    ),
    textSecond: (
      <span>
        {" "}
        Одна из компаний «Martinex» дала согласие на упоминание ее в материалах.
      </span>
    ),
    companyInfo: {
      logo: imgMartinexLogo,
      numberRepresentative: 100,
      numberStaff: 30,
      text: (
        <span>
          {" "}
          Лидер рынка косметологических препаратов, крупная высокотехнологичная
          вертикально-интегрированная компания. Компания обладает одной из самых
          развитых в отрасли системой продвижения.
        </span>
      ),
      button: {
        text: "Подробнее",
      },
    },
  },
  comparisonCRM: {},
  systemSCM: {
    title: "Система контурного управления продажами «РЕКОНТЕРА»",
    text: (
      <span>
        Это современная маркетинговая система управления продвижением/продажами
        как комплексом кросс-функциональных бизнес-процессов взаимодействия с
        клиентами подразделений маркетинга и продаж — Контуров. Каждый из
        Контуров генерирует и конвертирует в заказы свой отдельный независимый
        поток обращений и управляется из единого центра. <br />
        Не требуя кардинальных изменений в организации служб маркетинга и
        продаж, СКП «РЕКОНТЕРА»:
      </span>
    ),
    cardSCM: [
      {
        icon: imgSettings,
        text: (
          <span>
            {" "}
            Выводит управление продвижением на качественно новый уровень
          </span>
        ),
      },
      {
        icon: imgChart,
        text: (
          <span>
            {" "}
            Обеспечивает рост клиентской базы и продаж на системном долгосрочном
            уровне
          </span>
        ),
      },
      {
        icon: imgFlash,
        text: (
          <span> Существенно усиливает конкурентоспособность компании</span>
        ),
      },
      {
        icon: imgTrophy,
        text: (
          <span>
            {" "}
            И, в конечном счете, обеспечивает ей успех в высококонкурентной
            борьбе
          </span>
        ),
      },
    ],
  },
  submitYourApp: {
    title: "Оставить заявку",
    subtitle: "Проконсультируем, ответим на все вопросы",
    button: {
      text: "Подробнее",
    },
    consent: {
      text: <span>Отправляя форму вы соглашаетесь с </span>,
      link: (
        <span className="text-primary-orange">
          политикой обработки персональных данных
        </span>
      ),
    },
  },
};
