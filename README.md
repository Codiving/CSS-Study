# Flex & Grid

CSS `flex, grid`를 제대로 공부하고 싶어 프로젝트를 생성하였다.  
이번 기회에 2가지 모두 습득하여 다신 `기초에서 헷갈리지 않도록` 해야겠다.

간단하게 공부하면서 구현해본 컴포넌트들이다.  
구현 결과물 코드와 구현하기 전 코드가 같이 있으니 참고해서 해보아도 좋을 것 같다.

- media-query 분기점  
  768px  
  1024px

- flex에서 사용한 이미지 출처 (unsplash)  
  [이미지 주소](https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60)

### `Flex`

- Header 컴포넌트

- Menu 컴포넌트

- CardList 컴포넌트

- 전체 Layout

### `Grid`

### `Transfrom Transition`

**`Transfrom`**  
특정 요소에 **회전**, **크기 조절**, **기울이기**, **이동 효과**를 설정할 수 있음.  
GPU를 사용하여 **성능이 좋다**.  
**기준점**을 내 마음대로 **변경**할 수 있다.  
출처 : [MDN transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)

- Q. item hover 시 크기를 2배로 만드시오.

- Q. item hover 시 30deg 기울도록 하시오.

- Q. item hover 시 x, y 축으로 50%씩 이동하시오.

- Q. item hover 시, 30deg 회전 시키시오.

- Q. item hover 시, 30deg 회전 시키시오. (기준점 : 오른쪽 아래)

**`Transition`**  
특정 요소가 변할 때 중간 과정을 보여주는 것.  
출처 : [MDN Transition](https://developer.mozilla.org/ko/docs/Web/CSS/transition)

- Q. 1초 동안 중간과정을 실행시켜라

```javascript
.item {
  transition: 1s
}
```

- Q. 기존 transition은 가속도가 붙는다. 둥속도로 변경해보자.

```javascript
.item {
  transition: 1s linear;
}
```

- Q. 1초 후 animation, 1초 동안 실행시키고 싶다.

```javascript
.item {
  transition: 1s 1s;
}
```
