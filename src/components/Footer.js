import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <div className="social">
        <div className="media">
          <a href="https://www.instagram.com/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div className="media">
          <a href="https://twitter.com/home" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div className="media">
          <a href="https://www.youtube.com/" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <div className="media">
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="contact">
        <p>719-266-2837</p>
        <p>contact@mms.org</p>
      </div>
      <h2>&copy; 2021 MURPHY'S MUSIC SCHOOL ALL RIGHTS RESERVED</h2>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  min-height: 5vh;
  background: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 1rem;
    margin: 1rem 0rem;
    text-shadow: 2px 2px 3px black;
    text-align: center;
  }
  .contact {
    display: flex;
    p {
      margin: 0rem 2rem;
      text-shadow: 2px 2px 3px black;
    }
  }
  .social {
    display: flex;
    .media {
      font-size: 2rem;
      margin: 1rem 2rem;
      cursor: pointer;
      transition: all ease 0.5s;
      &:hover {
        filter: drop-shadow(10px 10px 2px rgba(0, 0, 0, 0.5));
        a {
          color: #f55673;
        }
      }
    }
  }
  @media (max-width: 414px) {
    .social {
      .media {
        margin: 1rem 1rem;
      }
    }
  }
`;

export default Footer;
