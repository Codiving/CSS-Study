import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 10px;
  border: 1px solid;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.3em;
`;

export const MiniTitle = styled.h6`
  font-weight: bold;
  font-size: 1.05rem;
`;

export const Description = styled.p`
  margin-bottom: 0.3em;
`;

export const MB10 = styled.div`
  height: 10px;
  visibility: hidden;
`;

const FlexContainer = styled.div`
  display: flex;
  background-color: gray;
  margin-bottom: 1rem;
`;

const FlexItem = styled.p`
  background-color: antiquewhite;
  margin: 3px;
  padding: 3px;
  word-wrap: break-word;
`;

const FlexBasisItem = styled(FlexItem)`
  flex-basis: 100px;
`;

const FlexWidthItem = styled(FlexItem)`
  width: 100px;
`;

const FlexBasis = () => {
  return (
    <Container>
      <Title>flex-basis</Title>
      <Description>flex-item의 기본 크기 (주축)</Description>
      <Description>default value : auto (자기 자신 크기)</Description>

      <MB10 />
      <MiniTitle>flex-basis : 100px</MiniTitle>
      <FlexContainer>
        <FlexBasisItem>Loremipsum</FlexBasisItem>
        <FlexBasisItem>Lorem</FlexBasisItem>
        <FlexBasisItem>
          Loremipsumdolorsitametconsecteturadipisicing
        </FlexBasisItem>
      </FlexContainer>

      <MiniTitle>width : 100px</MiniTitle>
      <FlexContainer>
        <FlexWidthItem>Loremipsum</FlexWidthItem>
        <FlexWidthItem>Lorem</FlexWidthItem>
        <FlexWidthItem>
          Loremipsumdolorsitametconsecteturadipisicing
        </FlexWidthItem>
      </FlexContainer>
      <MB10 />
      <MiniTitle>간단 정리</MiniTitle>
      <MB10 />
      <Description>flex-basis</Description>
      <Description>100px 보다 작다 : 100px</Description>
      <Description>100px 보다 크다 : content 크기</Description>
      <MB10 />
      <Description>width</Description>
      <Description>고정 크기</Description>
    </Container>
  );
};

export default FlexBasis;
