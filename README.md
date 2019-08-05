## 이프로젝트는 학습용입니다.


이번 프로젝트는 주소록 CRUD(Create,Read,Update,Delete) 프로젝트입니다.

## git 프로젝트 올리는 방법
    1. github에 로그인하여 저장소(Repositories) 를 만든다.
    2. 새로 만들어지니 저장소의 링크를 복사한다.
    3. VS코드에서 깃탭으로 들어가서 프로젝트파일을 커밋한다.
    4. 터미널 창에서 -> git remotee add origin (링크) 입력하여 깃 저장소 연결
    5. 다음으로 git push 명령어 입력하면 끝
    

## Commponent LifeCycle API

1. componentWillMount()
    렌더링 되기전 실행

2. componentDidMount()
    렌더링 된 후 실행

3. componentWillReceiveProps()
    새로운 프롭스를 받았을때

4. shouldComponentUpdate()
    컴포넌트를 업데이트 할건지 결정

5. componentWillUpdate()
    컴포넌트를 업데이트 하기전에 실행

6. componentDidUpdate()
    컴포넌트가 업데이트 된 후 실행

7. componentWillUnmount()
    컴포넌트가 제거 될 때 
