import styled from "@emotion/styled";
import { useState } from "react";
import {
  Container,
  Description,
  MB10,
  MiniTitle,
  Title
} from "../FlexBasis/FlexBasis";

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

const FlexNoneGrowItem = styled(FlexItem)`
  flex-grow: 0;
`;

const FlexGrowItem = styled(FlexItem)`
  flex-grow: ${props => props.grow ?? 1};
  flex-basis: ${props => props.basis ?? "auto"};
`;

const Button = styled.button`
  width: 200px;
`;

const FlexGrow = () => {
  const [remove, setRemove] = useState(false);

  return (
    <Container>
      <Title>flex-grow</Title>
      <Description>flex-grow : 콘텐츠보다 더 커질 수 있는가?</Description>
      <Description>default value : 0 (커질 수 없다.)</Description>
      <MB10 />
      <MiniTitle>flex-grow : 0</MiniTitle>
      <FlexContainer>
        <FlexNoneGrowItem>Loremipsum</FlexNoneGrowItem>
        <FlexNoneGrowItem>Lorem</FlexNoneGrowItem>
        <FlexNoneGrowItem>
          Loremipsumdolorsitametconsecteturadipisicing
        </FlexNoneGrowItem>
      </FlexContainer>
      <MiniTitle>flex-grow : 1</MiniTitle>
      <FlexContainer>
        <FlexGrowItem>Loremipsum</FlexGrowItem>
        <FlexGrowItem>Lorem</FlexGrowItem>
        <FlexGrowItem>
          Loremipsumdolorsitametconsecteturadipisicing
        </FlexGrowItem>
      </FlexContainer>
      <MB10 />
      <MiniTitle>flex-grow 비율의 비밀 | 1:2:3</MiniTitle>
      <FlexContainer>
        <FlexGrowItem grow={remove ? 0 : 1}>
          Loremipsum (flex-grow : 1)
        </FlexGrowItem>
        <FlexGrowItem grow={remove ? 0 : 2}>
          Loremipsumdolorsitametconsecteturadipisicing (flex-grow : 2)
        </FlexGrowItem>
        <FlexGrowItem grow={remove ? 0 : 3}>Lorem (flex-grow : 3)</FlexGrowItem>
      </FlexContainer>
      <Description>우리가 알고 있는 지식 : 비율 1:2:3</Description>
      <Description>실제 동작 : 여백 배율 1:2:3</Description>
      <Button
        onClick={() => {
          setRemove(prev => !prev);
        }}
      >
        {remove ? "되돌리기" : "flex-grow 삭제해보기"}
      </Button>
      <MB10 />
      <MB10 />
      <Description>그럼 쓸모 없어보이는데 어떻게 비율을 맞춰 ?</Description>
      <Description>flex-basis를 이용하면 된다.</Description>
      <MB10 />
      <MB10 />
      <MiniTitle>flex-grow & flex-basis | 1:2:3</MiniTitle>
      <FlexContainer>
        <FlexGrowItem grow={remove ? 0 : 1} basis={0}>
          Loremipsum (flex-grow : 1)
        </FlexGrowItem>
        <FlexGrowItem grow={remove ? 0 : 2} basis={0}>
          Loremipsumdolorsitametconsecteturadipisicing (flex-grow : 2)
        </FlexGrowItem>
        <FlexGrowItem grow={remove ? 0 : 3} basis={0}>
          Lorem (flex-grow : 3)
        </FlexGrowItem>
      </FlexContainer>

      <Description>
        모든 item에 flex-basis : 0 을 주면 가볍게 해결 됨.
      </Description>
    </Container>
  );
};

export default FlexGrow;
