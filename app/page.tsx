"use client";

import Countdown from "./components/Countdown";
import MusicPlayer, { type MusicPlayerHandle } from "./components/MusicPlayer";
import ChildhoodReveal from "./components/ChildhoodReveal";
import Image from "next/image";
import { useRef, useState } from "react";

const WEDDING = {
  bride: "Ashwarya",
  groom: "Deepak",
  date: "15 November 2026",

  // TODO: Replace these once your venue is finalized.
  venue: "The Avenue Center Hotel",
  location: "Panampilly Nagar, Ernakulam, Kerala",
  ceremonyTime: "11:00 AM",

  // TODO: Replace with your actual Google Maps URL.
  mapsUrl: "https://maps.app.goo.gl/ixaCf5nhMwUY6pvAA",

  // TODO: Replace with your RSVP form URL.
  rsvpUrl: "#",
};

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerHandle>(null);

  const openInvitation = () => {
    musicPlayerRef.current?.play();
    setIsInvitationOpen(true);
  };

  return (
    <main className={`site-shell ${isInvitationOpen ? "is-invitation-open" : ""}`}>
      <MusicPlayer ref={musicPlayerRef} />
      {!isInvitationOpen && (
        <div className="invitation-gate" role="dialog" aria-modal="true" aria-label="Wedding invitation">
          <button type="button" className="invitation-gate-card" onClick={openInvitation}>
            <Image
              src="/parents-wedding-invitation/images/popup.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="invitation-gate-image"
            />
            <span className="invitation-gate-copy">It&apos;s Wedding Season<br />Tap for details</span>
          </button>
        </div>
      )}
      {/* HERO */}
      <section className="hero">
        <div className="hero-grain" />

        <nav className="top-nav">
          <span className="nav-mark">A <span>×</span> D</span>
          <span className="nav-label">Wedding Invitation · 2026</span>
        </nav>
        <div className="ganesha">
          <Image
            src="/parents-wedding-invitation/ganesha.png"
            alt="Ganesha"
            width={140}
            height={140}
            priority
            style={{ background: "transparent" }}
          />
        </div>
        <div className="hero-content">
          <h2 className="hero-parents">
            <span>Geetha and Dileep Kumar</span>
            <span className="hero-parents-amp">&amp;</span>
            <span>K Malliga and T Kandasamy</span>
          </h2>
          <p className="hero-invitation-copy">
            invite you to the wedding of their beloved children
          </p>

          <h1 className="hero-title">
            <span>{WEDDING.bride}</span>
            <em>&amp;</em>
            <span>{WEDDING.groom}</span>
          </h1>
        </div>


        <div className="scroll-cue">
          <span>Scroll to discover</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      {/* DATE / CEREMONY */}
      <section className="details section">

        <div className="section-label">
          <span>01</span>
          <span>THE CEREMONY</span>
        </div>

        <div className="details-grid">
          <div className="details-intro">
            <h2 className="chapter-heading">A new chapter begins.</h2>
          </div>


          <div className="event-card">
            <div className="event-card-top">
              <span className="event-type">WEDDING CEREMONY</span>
              <span className="event-symbol">✦</span>
            </div>

            <div className="event-date">
              <span className="event-day">15</span>
              <span className="event-month">NOVEMBER</span>
              <span className="event-year">2026</span>
            </div>

            <div className="event-divider" />

            <div className="event-row">
              <span className="event-label">TIME</span>
              <span>{WEDDING.ceremonyTime}</span>
            </div>

            <div className="event-row">
              <span className="event-label">VENUE</span>
              <span>{WEDDING.venue}</span>
            </div>

            <div className="event-row">
              <span className="event-label">LOCATION</span>
              <span>{WEDDING.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="invitation section">
        <div className="section-label">
          <span>02</span>
          <span>Trip down memory lane</span>
        </div>

        <div className="invitation-layout">
          <ChildhoodReveal />

          <div className="invitation-copy">
            <div className="mini-flower">✳</div>
            <p>Your gracious presence and good wishes to the couple would mean the world to us.</p>
          </div>
        </div>
      </section>



      {/* COUNTDOWN */}
      <section className="countdown-section">
        <div className="countdown-inner">
          <p className="eyebrow light-eyebrow">Until we tie the knot</p>
          <h2>The moment is approaching.</h2>
          <Countdown targetDate="2026-11-15T10:00:00+05:30" />
        </div>
      </section>

      {/* VENUE */}
      <section className="venue section">
        <div className="section-label">
          <span>03</span>
          <span>THE VENUE</span>
        </div>

        <div className="venue-layout">
          <div className="venue-info">
            <p className="eyebrow">Where we meet</p>
            <h2>{WEDDING.venue}</h2>
            <p className="body-copy">{WEDDING.location}</p>

            <p className="venue-placeholder">
              Venue and ceremony details will be updated here.
            </p>

            <a
              href={WEDDING.mapsUrl}
              className="outline-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open in Maps</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-monogram">A <span>×</span> D</div>
        <p>With Love, Dileep, Geetha and Lakshmi</p>
        <span className="footer-date">15 · 11 · 2026</span>
      </footer>
    </main >
  );
}
