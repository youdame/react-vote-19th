## 🐻 배포 링크

https://react-vote-19th.vercel.app/

## 👩‍💻 구현 기능

### 유담

- 로그인 및 회원가입
- 토큰 관리

### 나현

- 투표 기능

## 기술 스택

- nextJS
- tailwindCSS
- typescript
- react-query
- react-hook-form
- jotai
- react-hot-toast
- cva

## 트러블 슈팅

1. Mixed-content 에러 해결을 위한 rewrites 설정
    
    ### 문제
    
    HTTPS로 배포된 사이트에서 HTTP 서버와 통신 시 Mixed-content 에러 발생.
    
    ### 해결 방법
    
    `next.config.js`에 `rewrites` 설정을 추가하여 모든 api 요청을 HTTP 서버로 프록시하도록 설정.
    
    ### 예시
    
    ```jsx
    Request URL: https://react-vote-19th.vercel.app/login
    Request Method: POST
    
    프록시 설정에 의해 실제 요청 URL:
    Request URL: http://<our-backend-server>/api/v1/login
    Request Method: POST
    ```
    
    ### 그냥 백엔드가 https로 배포하면 안됨?
    
    맞아요..^^ 근데 도메인도 사야하고 이미 아지토는 운영중인 사이트라 그 도메인을 같이 쓰기도 애매했습니다. 사실 조유담 이름으로 된 도메인이 하나 있는데 그걸 쓸 걸 하는 생각도 드네요. 
    

### 백엔드 분들이 잘 해주셔서 CORS 에러는 없었다.

---

## React-hook-form?

### 제어 컴포넌트 vs 비제어 컴포넌트

![제어 컴포넌트 vs 비제어 컴포넌트](https://github.com/youdame/react-vote-19th/assets/112458620/bfed9b20-f5ad-427e-aeb2-1d80fc201f65)




**제어 컴포넌트:**

- 제어 컴포넌트는 사용자의 입력을 react의 state와 연결하여 관리하고 업데이트 함
- useState로 만든 state를 input 연결 ⇒  onChange와 setState를 이용해 사용자의 입력이 달라질 때마다 state값이 달라지게 함

```js
import { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    
    const handleNameInputChange = (e) => {
    	e.preventDefault();
      setName(e.target.value);
    };
    
    return(
    	<form onSubmit={handleSubmit}>
            <input 
	             	type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameInputChange}
            />
            <button>Add</button>
        </form>
    );
};

export default App;
```

- 실시간 값 동기화가 가능하지만, state가 증가하면 (인풋이 여러 개가 되면) 컴포넌트 전체가 리렌더링되어 불필요한 연산이 발생

**비제어 컴포넌트:**

- 비제어 컴포넌트는 React의 state가 사용자의 입력값을 제어하지 않음
- DOM 자체에서 값을 가져오거나 조작 ⇒ useRef를 이용해서 입력값을 가져오는 방식
    
    ```js
    import { useRef } from 'react';
    
    const App = () => {
        const inputRef = useRef();
    
        const handleSubmit = () => {
          const name = inputRef.current.value;
          alert(`Your name is ${name}`);
        };
        
        return(
        	<form onSubmit={handleSubmit}>
                <input 
                 	type="text"
                    placeholder="Enter Name"
                    ref={inputRef}
                />
                <button>Add</button>
            </form>
        );
    };
    
    export default App;
    ```
    
- state로 관리하지 않기 때문에 입력 폼이 증가해도 state가 늘어나지 않으며, 값이 변경되어도 리렌더링되지 않음.

### React Hook Form 사용 이유

**React Hook Form의 장점:**

- 비제어 컴포넌트의 장점 유지하면서도 실시간 유효성 검사 및 동기화 기능 제공.
- 최소한의 리렌더링
- 종속성이 없는 가벼운 라이브러리.
- 타입스크립트 지원 ⇒  타입 안전성 보장.
- 친절한 공식 문서 ⇒ 사용법과 예제를 쉽게 접근 가능.
- 지속적인 업데이트 ⇒ 높은 다운로드 수와 꾸준한 업데이트.

### React Hook Form 코드 보고싶으면 ?

 [코드 보러가기](https://github.com/team-azito/react-vote-19th/blob/main/src/app/sign-up/page.tsx)

## 인증 방식 (쿠키 ? JWT 토큰?)

### 쿠키?

- 서버 응답이나 클라이언트 코드에 따라 브라우저에 저장되는 작은 단위의 문자열 파일들
    
    ![쿠키의 일반적인 속성 이미지](https://github.com/youdame/react-vote-19th/assets/112458620/fa39e611-430e-450e-8538-84a9c7af1692)

    
- 쿠키 인증을 사용한다면,
    1. 로그인 성공 시 서버에서 set-cookie 헤더에 클라이언트를 구분하는 인증서를 담아 프론트엔드에게 전달
        
        ![쿠키 인증 step1](https://github.com/youdame/react-vote-19th/assets/112458620/2dbbef8c-c45c-41bb-808a-93a1c0ca58d6)

        
    2. 리스폰스를 받은 클라이언트 브라우저는 쿠키 이름과 값을 저장하고 set-cookie에 나와있는 다양한 설정을 적용  
    3. 이렇게 된 쿠키는 브라우저가 리퀘스트를 보낼 때마다 Cookie라는 헤더에 자동으로 추가돼서 보내짐 ⇒ 프론트엔드 개발자가 토큰을 신경쓸 필요도, 토큰을 다루는 별도의 코드 작성할 필요도 X 
        
        ![쿠키 인증 step3](https://github.com/youdame/react-vote-19th/assets/112458620/d3868b89-40dc-48fa-b73c-0fa8c5cf1723)

    4. 서버에서는 이 쿠키를 보고 사용자가 누구인지 구분

### 엥 근데 난 브라우저의 쿠키에 액세스 토큰 직접 저장했는데????

- 쿠키 쓰면 프론트엔드에서 별도로 코드 작성 안해도 알아서 인증 해준다는 거 아니었음?
- 서버가 set-cookie 헤더가 아닌 바디에 “토큰”이라는 인증서를 담아 전달해줬다면 서버에게 받은 응답값에 set-cookie 헤더가 없으니 당연히 클라이언트도 브라우저에 자동으로 이를 저장하지 않음
- 대신, 프론트엔드 개발자가 자바스크립트 코드로 response 바디에 담긴 토큰을 직접 꺼내서 저장함
- 이 토큰을 저장하는 공간이 브라우저의 “쿠키”나 “로컬 스토리지”, “세션 스토리지”일 수도 있는 것임
    - 만약 토큰을 쿠키에 저장한다면? 요청 때마다 Cookie 헤더를 통해 자동으로 토큰이 전송됨
        - 그런데 이 상황에서 서버에서 Cookie 헤더가 아니라 Authorization 헤더로 쿠키를 받는 식으로 코드를 짰다면?
        
        ⇒ 토큰이 쿠키를 통해 자동으로 전송되는 게 무의미해짐, Authorization 헤더에 따로 담아 전달해야함
        
- 즉, 프론트엔드와 백엔드가 어떤 헤더를 통해 토큰을 주고 받을 지는 그냥 정하기 나름임
    
    

### 정리

- 매 요청마다 자동으로 인증서를 Cookie 헤더에 담아 요청을 보내는 쿠키 인증을 사용하려면 서버에서 set-cookie 헤더에 인증서를 담아 보내줘야함
- 액세스 토큰이나 리프레시 토큰을 서버로부터 body에 받아 클라이언트에서 브라우저의 쿠키에 저장한다면,
    - 서버에서 정한 방법에 따라 클라이언트에서 토큰을 전송해야함

### 그럼 어떤 인증이 제일 안전해 ?

- 개인 견해로는 액세스토큰을 쿠키 인증으로(set-cookie 헤더 이용) 받고, HttpOnly 옵션을 이용해 클라이언트가 자바스크립트 코드로 쿠키에 접근 할 수 없게 하는 방식이 가장 안전한 거 같음
    
    → 근데 이전에 다른 팀과 협업할 때 쿠키 인증을 백엔드에서 구현하는 게 어렵다고 했었는데 실제로 그런지 궁금…
    
- 여러 개를 섞어서 사용하기도 함
    - 예) 액세스토큰은 응답값 body에 담아 받고, 리프레시 토큰은 쿠키 + HttpOnly 사용
- 근데 우리 과제에서는 그냥 토큰을 응답값으로 받아서 로컬스토리지에 저장함 ⇒ 공격자가 브라우저에 자바스크립트 코드를 삽입하는 XSS 공격에 취약

## CVA를 이용하여 재사용 가능한 UI 만들기

### cva란?

<aside>
✨ `class-variance-authority` 라이브러리의 약자로 일관성 있는 UI를 정의하고 사용할 수 있도록 도와주는 툴

</aside>

### 사용 이유 및 예시

**사용 이유**

Tailwind CSS 사용 시 조건 부 스타일링을 할 때 코드 가독성 향상에 매우 유용함

**실제 코드 예시** 

```tsx
<GenSelectBtn onClick={handleVoteClick} variant={teamValue ? undefined : "disabled"}>
          투표하기
</GenSelectBtn>
```

- teamValue: 후보를 선택하면 어떤 팀을 선택했는지 저장하는 변수
- 이 값이 존재할 경우(즉 후보를 선택했을 경우) GenSelectBtn 컴포넌트의 variant props에 undefined 값이 보내지고, 이 값이 존재하지 않을 경우(즉 후보를 선택하지 않았을 경우) disabled 값이 보내짐

```tsx
const GenSelectBtn = ({ children, variant, onClick }: GenSelectBtnProps) => {
	const btnClass = variant === "disabled" ? [기본 스타일링 + 조건부 스타일링] : [기본 스타일링 + 조건부 스타일링];
	
  return (
    <button onClick={onClick} className={variant}>
      <h3>{children}</h3>
    </button>
  );
};
```

```tsx
const GenSelectBtn = ({ children, variant, onClick }: GenSelectBtnProps) => {
  return (
    <button onClick={onClick} className={BackVariants({ variant })}>
      <h3>{children}</h3>
    </button>
  );
};

const BackVariants = cva(`h-45pxr w-150pxr text-white rounded-15pxr`, {
  variants: {
    variant: {
      default: "bg-blue-base",
      disabled: "bg-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
```

- cva 인자
    - 첫 번째 인자: 공통 스타일링
    - 두 번째 인자: variants라는 객체 key 안에 사용자가 정의한 객체를 작성해준다.
