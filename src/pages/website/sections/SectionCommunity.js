import React from 'react'
import { Link } from 'gatsby'
import reddit from '../../../../static/website/community/reddit.svg'
import discord from '../../../../static/website/community/discord.svg'
import twitter from '../../../../static/website/community/twitter.svg'
import community from '../../../../static/website/community/community.png'

const SectionCommunity = () => {
  return (
      <section id="community" className="section-community">
        <div className="row">
          <div className="community-title header">
            Join Our Community
          </div>
          <div className="community-subtitle content">
            We’re on a mission to make digital asset investment simple, accessible, and secure.
          </div>
          <div className="community-icons-row">
            <Link to="https://www.reddit.com/r/totalcryptomarketcap" className="community-item">
              <img src={reddit} className="community-item-icon" alt="Reddit" />
              <div className="community-item-text terciary-header">Reddit</div>
            </Link>
            <Link to="https://discord.gg/N5zEq6b" className="community-item">
              <img src={discord} className="community-item-icon" alt="Reddit" />
              <div className="community-item-text terciary-header">Discord</div>
            </Link>
            <Link to="https://www.twitter.com/cryptexglobal" className="community-item">
              <img src={twitter} className="community-item-icon" alt="Reddit" />
              <div className="community-item-text terciary-header">Twitter</div>
            </Link>
          </div>
          <div className="community-subscribe-title heading-secondary">
            Stay in Touch
          </div>
          <input className="community-subscribe-input" placeholder="Email"></input>
          <button className="community-subscribe-button button-pink">Subscribe</button>
          <img src={community} className="community-image" alt="Community" />
        </div>
      </section>
  )
}

export default SectionCommunity