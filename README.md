## 리액트 연습
- 코딩앙마님의 [강의](https://youtu.be/05uFo_-SGXU)을 보고 공부한 뒤, 몇 가지 기능을 수정/추가 해보았다.
- json-server를 이용하여 간단한 `data.json` 파일에서 REST API 연습을 하였다.
  - 백 전용으로 사용할 터미널을 하나 추가하고, `npm i -g json-server` 설치 후,    
    `json-server --watch ./src/db/data.json --port 3001`으로 실행하였다.
  - 매번 이렇게 실행하는 것이 번거로워서 `package.json`에서 `scripts`부분을 수정하고 `npm run start2`로 실행할 수 있게 되었다.  
  ```javascript
  "scripts": {
    "start2": "json-server --watch ./src/db/data.json --port 3001"
  },
  ```
- 라우터를 통해 필요한 데이터를 전달하고 필터링하는 방법을 익힐 수 있었다.
## 사용한 기능
### 1. React-Router
### 2. Dynamic Routing
  ```javascript
  <Route path="/folder/:folder">
      <Folder />
  </Route>
  ```
  - 불러올 폴더를 사용자가 클릭한 대로, 동적으로 변경시킬 수 있는 `params`를 사용하였다.
  - 이렇게 url에 포함된 값을 얻을 때는 `useParams`를 사용한다.
  - 예를 들어, `const a = useParams(); console.log(a);`를 입력하고 주소에 `folder/5`을 입력하면,  
    `{ folder: 5 }`이라는 결과가 뜬다.
  - `path="/folder/:folder"`에서 `:folder` 자리에 `5`이 들어갔기 때문이다.
  - 위 식을 구조분해할당으로 활용하면 다음과 같이 간단하게 표현할 수 있다.
  ```javascript
  const a = useParams();
  const folder = a.folder;
  const folder = useParams().folder;
  const { folder } = useParams();
  ```
### 3. 쿼리스트링
  - 쿼리스트링을 사용하면 주소에 부가적인 정보를 담을 수 있다.
  - useParams를 통해 받아온 정보로 해당 폴더 안에 담긴 단어를 `fetch`해온다.
  ```javascript
    useEffect(() => {
    fetch(`http://localhost:3001/words?folder=${folder}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [folder]);
  ```
### 4. 커스텀 훅
  - 폴더목록->폴더 / 폴더->해당폴더단어 이렇게 데이터를 fetch하는 과정이 동일한 로직으로 작성되므로 커스텀 훅으로 만든다.
  ```javascript
  export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}

  ```
  - 이 커스텀 훅은 다음과 같이 사용할 수 있다.
  ```javascript
  export default function FolderList() {
  const folders = useFetch("http://localhost:3001/folders");

  return (
    <>
      <ul className="list_folder">
        {folders.map((v) => {
          return (
            <li key={v.id}>
              <Link to={`/folder/${v.folder}`}>{v.folder}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
  ```
### 5. REST API를 사용하여 fetch 하기
  - 단어의 암기 여부를 체크하는 체크박스에 토글기능을 넣고, `PUT`메서드를 통해 data를 수정하였다.
  ```javascript
  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }
  ```
  - `header`의 `"Content-Type"`은 보내는 리소스의 타입을 의미함. json 형태로 보낸다.
  - `body`에서 수정할 데이터를 입력하는데, 이때 stringify로 변환을 한다. 불변성유지는 필수!
  - 이렇게 업데이트를 할 때 setState를 사용해서 다시 렌더링하도록 한다. 그래야 화면에 반영이 되기 때문.
  - fetch(url, [options])  
    url: 접근하고자 하는 url  
    options: 선택 매개변수, method, header 등을 지정할 수 있음.  
    (options에 아무것도 넘기지 않으면 요청은 GET 메서드로 진행됨!)  
### 6. useHistory()
  - 새로운 단어나 폴더를 생성했을 때, 바로 확인시켜줄 수 있게 해당 화면으로 페이지 전환을 하려면 useHistory를 사용한다.
  - useHistory를 통해 쉽게 history 객체에 접근할 수 있게 된다.
  - 예를 들어, 단어를 추가하면 해당 단어가 담긴 폴더 페이지로 바로 이동한다.
  ```javascript
  const history = useHistory();
  
  // ...code
  .then((res) => {
        if (res.ok) {
          alert("추가되었습니다.");
          history.push(`/folder/${folderRef.current.value}`);
  ```
