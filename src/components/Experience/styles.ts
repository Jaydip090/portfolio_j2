import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      .role {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        
        h3 {
          margin: 0;
          font-size: 2rem;
        }

        .date {
          font-size: 1.5rem;
          color: #AAAAAA;
          font-weight: 300;
        }
      }

      p {
        position: relative;
        padding-left: 2rem;
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;

        &::before {
          content: '➜';
          position: absolute;
          left: 0;
          color: var(--green);
          font-size: 1.5rem;
          line-height: 1;
        }

        a {
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 740px) {
    .projects {
      flex-direction: column;
    }
  }
`;



