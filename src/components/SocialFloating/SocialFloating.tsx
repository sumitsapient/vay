"use client";
import "./SocialFloating.css";

const SocialFloating = () => {
  return (
    <div className="social-floating">
      <ul>
        {/* Facebook Link */}
        <li>
          <a href="https://www.facebook.com/your-page-name" target="_blank" rel="noopener noreferrer">
            <i className="fa wp-icon fa-facebook-f fa-lg"></i>
          </a>
        </li>

        {/* WhatsApp Link */}
        <li>
          <a href="https://wa.me/9984095796" target="_blank" rel="noopener noreferrer">
            <i className="fa wp-icon fa-whatsapp fa-lg"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialFloating;
