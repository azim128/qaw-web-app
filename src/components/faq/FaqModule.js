import React from "react";
import "./faq.css";
import faqList from "./FaqList";
import {
  BsQuestionOctagonFill,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from "react-icons/bs";
import SectionHead from "../sectionheader/SectionHead";
const FaqModule = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
      <SectionHead title="Frequently Asked Questions" subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."/>

        <div className="faq-list">
        <ul>
  {faqList.map((item, index) => (
    <li key={index} data-aos="fade-up" data-aos-delay="100">
      <i className="icon-help">
        <BsQuestionOctagonFill />
      </i>{" "}
      <a
        href={`#faq-list-${index + 1}`}
        data-bs-toggle="collapse"
        className="collapse"
        data-bs-target={`#faq-list-${index + 1}`}
      >
        {item.question}{" "}
        <i className="bx bx-chevron-down icon-show">
          <BsChevronCompactDown />
        </i>
        <i className="bx bx-chevron-up icon-close">
          <BsChevronCompactUp />
        </i>
      </a>
      <div
        id={`faq-list-${index + 1}`}
        className={`collapse ${index === 0 ? "show" : ""}`}
        data-bs-parent=".faq-list"
      >
        <p>{item.answer}</p>
      </div>
    </li>
  ))}
</ul>

        </div>
      </div>
    </section>
  );
};

export default FaqModule;
