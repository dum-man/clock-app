import styled from "styled-components";
import { motion } from "framer-motion";
import { useGetTimeZoneQuery } from "../app/api";

const Wrapper = styled(motion.section)`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 50px 0 50px 120px;
  color: white;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(30px);
`;

const Detail = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 1rem;
  line-height: 2.8rem;
  letter-spacing: 0.2rem;
`;

const Content = styled.div`
  padding-top: 20px;
  font-size: 3rem;
  font-weight: 700;
`;

export const variants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: 500,
  },
  exit: {
    y: 500,
  },
};

const Details = () => {
  const { data: clock } = useGetTimeZoneQuery();

  return (
    <Wrapper
      transition={{ duration: 0.5, type: "ease" }}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Detail>
        <Title>CURRENT TIMEZONE</Title>
        <Content>{clock?.timezone}</Content>
      </Detail>
      <Detail>
        <Title>DAY OF THE WEEK</Title>
        <Content>{clock?.day_of_week}</Content>
      </Detail>
      <Detail>
        <Title>DAY OF THE YEAR</Title>
        <Content>{clock?.day_of_year}</Content>
      </Detail>
      <Detail>
        <Title>WEEK NUMBER</Title>
        <Content>{clock?.week_number}</Content>
      </Detail>
    </Wrapper>
  );
};

export default Details;
