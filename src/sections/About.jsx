import React from 'react'
import "../styles/sections/About.css"
import InfoCard from "../components/common/InfoCard"

  const INFO = [
    { src: "/images/icon/person.svg", alt: "사람 아이콘", label:"Name" , text: "최준혁" },
    { src: "/images/icon/calendar.svg", alt: "달력 아이콘", label:"Birth" , text: "2000.11.21" },
    { src: "/images/icon/map.svg", alt: "마커 아이콘", label:"Address" , text: "경기도 용인시" },
    { src: "/images/icon/call.svg", alt: "전화 아이콘", label:"Call" , text: "010-9912-6742" },
    { src: "/images/icon/email.svg", alt: "이메일 아이콘", label:"Email" , text: "wnscjcj2000@naver.com" },
    { src: "/images/icon/github.svg", alt: "깃허브 아이콘", label:"Github" , text: "junhyuk2000 ↗", href: "https://github.com/junhyuk2000" },
  ];

export default function About() {

  return (
    <section className="about fade-target">
      <h2 className="about-me">ABOUT ME</h2>

      {/* 상단 블럭 */}
      <div className='about-me-top'>
        <div className="photo">
          <img src="/images/profile.jpg" alt="" />
        </div>
        <div className="about-me-info-wrap">
          {INFO.map((item)=>(
            <InfoCard key={item.alt} {...item}/>
          ))}
        </div>
      </div>

      {/* 하단블럭 */}
      <div className="about-bottom">
        <div className="about-block">
          <h3 className="about-block-title">Certificates</h3>
          <ul className="about-list">
            <li className="about-list-item">
              <span className="about-list-main">웹디자인개발기능사</span>
              <span className="about-list-sub">취득</span>
            </li>
            <li className="about-list-item">
              <span className="about-list-main">정보처리기사 (필기 합격)</span>
            </li>
          </ul>
        </div>

        <div className="about-block">
          <h3 className="about-block-title">Education</h3>
          <ul className="about-list">
            <li className="about-list-item">
              <span className="about-list-main">호서대학교 ( 디지털기술경영학과 )</span>
              <span className="about-list-sub">졸업</span>
            </li>
            <li className="about-list-item">
              <span className="about-list-main">두드림컴퓨터아카데미 ( UI/UX - React )</span>
              <span className="about-list-sub">수료</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
